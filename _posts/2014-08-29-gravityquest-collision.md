---
layout: post
title: Gravity Quest - Collision implementation
slug: gravityquest-collision
date: 2014-08-29 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

**Other posts in this series**
* [Introduction and technology choice]({% post_url 2014-08-27-gravityquest-intro %})
* [Gameplay design and implementation]({% post_url 2014-08-28-gravityquest-gameplay %})
* Gameplay implementation: collision detection
* [Visuals and sound]({% post_url 2014-09-02-gravityquest-visuals %})
* [Level design]({% post_url 2014-09-06-gravityquest-levels %})
* [Distribution]({% post_url 2014-09-11-gravityquest-distribution %})

In the <a href="gameplay_design_and_implementation.html">previous article</a> of this series, I discussed the basic design and implementation of Gravity Quest's gameplay. In this article, I will extend the discussion of the implementation with a focus on collision detection. Collision detection proved to be an fundamental aspect of developing Gravity Quest and is required in many other games as well.

In Gravity Quest, various collisions may occur. The astronaut may collide with thermoactive asteroids, which can be targeted by the gravity gun, with dwarf novae, which cannot be targeted by the gravity gun, or with aliens, which chase the astronaut if she passes them too closely. In all these cases, the astronaut is killed, requiring solid collision detection.


### Phaser's physics engines

Phaser comes with three different physics engines which include collision detection:

* Phaser's own <b>Arcade</b> engine is generally optimized for fast performance. Its features cover many basic requirements game developers have, but do not necessarily suffice when more complex needs arise.
* Phaser further packages the <b>P2</b> physics engine (<a href="http://github.com/schteppe/p2.js/" target="_blank">P2 physics engine's GitHub repository</a>). It offers various advanced features like polygon bodies for collision detection, constraints, or springs. Demos of these features can be found at the <a href="http://schteppe.github.io/p2.js/" target="_blank">P2 homepage</a>.
* Finally, Phaser includes the <b>Ninja</b> physics engine. It shines when creating virtual landscapes with slopes or rounded corners. Typical games profiting from the Ninja engine are platformers (think of old versions of Super Mario or Sonic).


### P2 as an initial choice

For Gravity Quest's purposes, initially, P2 was the engine of choice by ruling out the other ones. The Ninja engine was ruled out because it targets a different style of games. The Arcade engine offers many of the features required for Gravity Quest, for example, functions for accelerating objects to one another. However, it does only support collision detection between rectangles, whereas in Gravity Quest most of the objects requiring collision detection are circles. Asteroids, novae, aliens - all these are somehow round in my mind. P2 provided everything I needed out of the box, except an <code class="language-javascript">accelerateToObject</code> function which I was aware of from the Arcade engine and which is fundamental to Gravity Quest's <a href="gameplay_design_and_implementation.html">gameplay</a>. I reproduced this function as shown in listing 1 and discussed in <a href="http://www.html5gamedevs.com/topic/5440-collision-of-arcade-and-ninja-bodies/" target="_blank">this forum thread</a>.


```javascript
...
accelerateToObject: function (obj1, obj2, speed) {
  if (typeof speed === 'undefined') { speed = 60; }
  var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
  obj1.body.force.x = Math.cos(angle) * speed;
  obj1.body.force.y = Math.sin(angle) * speed;
}
...
```
<small class="grey after">Listing 1: accelerateToObject function for P2 bodies.</small>


Almost throughout the whole development process of Gravity Quest, I happily stuck with my choice of P2. I always intended to publish the game for iOS initially, due to the comparatively small amount of devices to test for. Still, while developing the game, I mostly tested it on my iPhone 5. When the game was nearly finished, however, I started to test it also on some of my friends' Apple devices such as the iPhone 4 and iPhone 4s. And, unfortunately, I found that performance was lacking: framerates dropped (depending on the complexity of the level I tested) to under 30, which was enough to make Gravity Quest feel sluggish. I performed some tests to identify the performance bottleneck, initially suspecting the frequent distance calculations in the update function (see the implementation described in the <a href="gameplay_design_and_implementation.html">previous article</a>). These tests revealed, however, that P2 was too heavy, at least in the way I used it, for older devices. (Please note: in no way do I want this statement to be generalized - this was just my experience and must not hold in other cases and does certainly not speak against the high quality of P2.) Based on this insight, I decided to follow another route.
      
Given Gravity Quest's need for a physics engine, for example to accelerate objects, I decided to switch to using Phaser's faster Arcade engine. Because it does, however, not provide collision detection between rectangles and circles or circles and circles, I implemented my own solution, which I will describe in the following.


### Collision between circles and circles

One possible type of collisions in Gravity Quest concerns that of circular objects with other circular objects. For example, the collision of two aliens, both circular, results in their explosion.

Listing 2 shows how the collision detection between two circles is implemented. The two functions, <code class="language-javascript">collidesCircleCircle</code> and <code class="language-javascript">getPowDistance</code>, can be defined as methods of the state object where they are required in. The <code class="language-javascript">collidesCircleCircle</code> function takes as input two Arcade physics bodies, called <code class="language-javascript">body1</code> and <code class="language-javascript">body2</code>. Note: these bodies are rectangles, the only type of body supported by the Arcade physics engine. It is assumed, however, that these bodies belong to circular sprites, implying that the bodies are square (their width equals their height). It is further assumed that these bodies' anchors are centered both vertically and horizontally. 

```javascript
...
/* 
 * Determines whether two circles collide or not.
 * Input: 2 square Arcade physics bodies with centered anchors
 * Output:
 * - true, if collision is detected
 * - false, if no collision is detected
 */
collidesCircleCircle: function(body1, body2){
  var radius1 = body1.width * 0.5;
  var radius2 = body2.width * 0.5;
  if(Math.abs(body1.x - body2.x) < radius1 + radius2 &&
    Math.abs(body1.y - body2.y) < radius1 + radius2){
    var distance = this.getPowDistance(body1.x, body1.y, body2.x, body2.y);
    if (distance < (radius1 + radius2) * (radius1 + radius2)){
        return true;
    }
  }
  return false;
},

/* 
 * Helper function to determine the distance between
 * two points using Pythagorean theorem 
 */
getPowDistance: function(fromX, fromY, toX, toY){
  var a = Math.abs(fromX - toX);
  var b = Math.abs(fromY - toY);
  return (a * a) + (b * b);
}
...
```
<small class="grey after">Listing 2: collision detection between 2 circular bodies.</small>

Initially, as shown in listing 2, the radii of these bodies is derived from their width. In the first if-statement, a fast check is performed to determine if collision is possible - that is, whether the horizontal and vertical distance between the two bodies is smaller or equal to the sum of their radii. If this condition does not hold, two circles cannot collide, as exemplarily shown in case 1 in image 1. If the condition holds, collision may occur, for example if the two bodies are vertically or horizontally aligned as shown in case 2 in image 1, but must not as shown in case 3 in image 1. Thus, a second condition is necessary. It uses the Pythagorean theorem to determine the distance between the two bodies' anchors. The collision detection returns <code class="language-javascript">true</code>, if the determined distance is smaller than the sum of the two radii. Based on this second condition, collision in case 3 in image 1 is excluded and collision in case 4 in image 1 is detected.

{% include image name="circle_collision.png" caption="Image 1: example of circle collision" %}

### Collision between rotated rectangles and circles

Another type of collisions in Gravity Quest is that of rotated rectangular objects and circular objects. For example, the astronaut is rectangular and can collide with circular thermoactive asteroids, dwarf novae, or aliens.

Listing 3 shows how the collision detection between a rotated rectangle and a circle is determined. Again, the function <code class="language-javascript">collidesRectCircle</code> can be defined as a method of the state object where it is required in.

```javascript
...
/* 
 * Determines whether two circles collide or not.
 * Input: 
 * - rect: an Arcade physics body with centered anchor
 * - circle: a square Arcade physics bodies with centered anchor
 * Output:
 * - true, if collision is detected
 * - false, if no collision is detected
 */
collidesRectCircle: function(rect, circle){
  var radius = circle.width * 0.5;
  var upperRectRadius = Math.max(rect.width, rect.height) * 0.75;

  // quick check, whether collision is actually possible:
  if(Math.abs(circle.x - rect.x) < radius + upperRectRadius &&
    Math.abs(circle.y - rect.y) < radius + upperRectRadius){

    // adjust radians:
    var rotation = rect.rotation > 0 ? -1 * rect.rotation : -1 * rect.rotation + Math.PI;

    // rotate circle around origin of the rectangle:
    var rotatedCircleX = Math.cos(rotation) * (circle.x - rect.x) - 
        Math.sin(rotation) * (circle.y - rect.y) + rect.x;
    var rotatedCircleY  = Math.sin(rotation) * (circle.x - rect.x) + 
        Math.cos(rotation) * (circle.y - rect.y) + rect.y;

    // get upper left position of the rectangle:
    var rectX = rect.x - (rect.width * 0.5);
    var rectY = rect.y - (rect.height * 0.5);

    // find closest point in the rectangle to the rotated circle's center:
    var closestX, closestY;

    if (rotatedCircleX  < rectX){
      closestX = rectX;
    } else if (rotatedCircleX  > rectX + rect.width){
      closestX = rectX + rect.width;
    } else {
      closestX = rotatedCircleX;
    }

    if (rotatedCircleY < rectY){
      closestY = rectY;
    } else if (rotatedCircleY > rectY + rect.height) {
      closestY = rectY + rect.height;
    } else {
      closestY = rotatedCircleY;
    }

    // check distance between closest point and rotated circle's center:
    var distance = this.getPowDistance(rotatedCircleX, rotatedCircleY, closestX, closestY);
    if (distance < radius * radius){
      return true; // Collision
    }
  }
  return false;
}
...
```
<small class="grey after">Listing 3: collision detection between a rotated rectangular and a circular body.</small>

Initially, as shown in listing 3, the given circle's radius is determined. Also, an approximate upper bound <code class="language-javascript">upperRectRadius</code> of the radius of a circle surrounding the given rectangle is determined. Using these radii, similar to collision detection between two circles, a quick check is performed to determine whether collision is possible at all.

The following, more expensive, collision detection is a JavaScript translation of the method described in a post about <a href="http://www.migapro.com/circle-and-rotated-rectangle-collision-detection/" target="_blank">Circle and Rotated Rectangle Collision Detection</a>. Its basic idea is to compensate for the rectangle's rotation by shifting the circle's center around the rectangle's center by the same amount.

To do so, after having adjusted the radian rotation as described in a comment by Brad Greens in the article <a href="http://www.migapro.com/circle-and-rotated-rectangle-collision-detection/" target="_blank">Circle and Rotated Rectangle Collision Detection</a>, the circle's anchor is rotated around the rectangle's anchor to compensate for the rectangle's rotation using basic algebra. This procedure results in coordinates of the rotated circle's center, denoted by <code class="language-javascript">rotatedCircleX</code> and <code class="language-javascript">rotatedCircleY</code>.

Next, the X and Y coordinates of the closest point within the rectangle to the rotated circle's center are determined in the if-else-statements. Finally, using again the Pythagorean theorem, the distance between the determined closest point in the rectangle and the center of the rotated circle is determined. If this distance is smaller than the circle's radius, collision is detected.


### Using custom collision detection in the game

Having the basic mechanisms in place, they can be used for collision detection. To exemplify this, the source code from the <a href="gameplay_design_and_implementation.html">previous article</a> is extended to support collision detection between the rectangular astronaut and some novae. Upon collision, the game's single state is restarted.

As shown in listing 4, the corresponding assets are loaded in the <code class="language-javascript">preload</code> function.

```javascript
...
game.load.image('nova', 'assets/nova.png');
...
```
<small class="grey after">Listing 4: loading an asset for the novae.</small>

Next, in the <code class="language-javascript">create</code> function, as shown in listing 5, three novae are randomly placed in the world and added to a novae group. As in the <a href="gameplay_design_and_implementation.html">previous article</a>, a border of 100 pixels is left out for positioning the novae.

```javascript
...
this.novae = game.add.group();
for (var i = 0; i < 3; i++) {
  var nova = game.add.sprite(
    game.rnd.integerInRange(100, game.world.width - 100),
    game.rnd.integerInRange(100, game.world.height - 100),
    'nova');
  nova.anchor.setTo(0.5, 0.5);
  this.novae.add(nova);
};
...
```
<small class="grey after">Listing 5: place novae at random positions.</small>

Finally, in the <code class="language-javascript">update</code> function, collision is checked for as shown in listing 6. The novae group is iterated and every nova is checked against collision with the astronaut in the above described <code class="language-javascript">collidesRectCircle</code> function. If collision is detected, the main state is restarted.

```javascript
...
this.novae.forEach(function(nova){
  if(this.collidesRectCircle(this.astronaut, nova)){
    game.state.start('main');
  }
}.bind(this));
...
```
<small class="grey after">Listing 6: check collision in the update function.</small>

### Demo

Press the button below to play a demo where collision detection is implemented as described above. If the astronaut collides with one of the novae, the game is restarted.

<a href="demo/collision_demo.html" class="btn btn-primary btn-lg active" target="_blank">Play demo...</a>

### Conclusion

Collision detection is a standard feature of many game development frameworks, certainly also of Phaser. In the case of Gravity Quest, however, the combination of requirements for a lightweight physics system and collision detection between circular bodies drove me to a custom solution. The here presented implementation, though far from being perfectly optimized, produces the desired outcome: the game performs well also on older iOS devices and collision detection works properly. The source code for the collision detection demo is available in this <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a>. In the next article, I will discuss how I created Gravity Quest's <a href="visuals_and_sound.html">visuals and sound</a>.

### Resources linked in this article

* <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's App store</a>
* <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a>
* <a href="http://github.com/schteppe/p2.js/" target="_blank">P2 physics engine's GitHub repository</a><small class="grey"> - GitHub repository of the P2 physics engine</small>
* <a href="http://schteppe.github.io/p2.js/" target="_blank">P2 homepage</a>
* <a href="http://www.html5gamedevs.com/topic/5440-collision-of-arcade-and-ninja-bodies/" target="_blank">Accelerating to object in P2</a><small class="grey"> - forum thread about implementing the accelerateToObject function for P2 bodies</small>
* <a href="http://www.migapro.com/circle-and-rotated-rectangle-collision-detection/" target="_blank">Circle and Rotated Rectangle Collision Detection</a><small class="grey"> - blog post about collision detection</small>
* <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a><small class="grey"> - complete, commented code of the demo</small>
