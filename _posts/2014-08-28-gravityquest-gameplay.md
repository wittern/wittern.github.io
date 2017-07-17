---
layout: post
title: Gravity Quest - Gameplay design and implementation
slug: gravityquest-gameplay
date: 2014-08-28 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

**Other posts in this series**
* [Introduction and technology choice]({% post_url 2014-08-27-gravityquest-intro %})
* Gameplay design and implementation
* [Gameplay implementation: collision detection]({% post_url 2014-08-29-gravityquest-collision %})
* [Visuals and sound]({% post_url 2014-09-02-gravityquest-visuals %})
* [Level design]({% post_url 2014-09-06-gravityquest-levels %})
* [Distribution]({% post_url 2014-09-11-gravityquest-distribution %})

In the <a href="introduction_and_technology_choice.html">first article</a> of this series, I wrote about my choice to use Phaser to develop Gravity Quest. Now, I want to give some insights into the design and implementation of the game's gameplay.

In <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest</a>, you take on the role of an astronaut who, while collecting mineral probes in space, in a freak accident is detached from her shuttle. To survive, the player has to navigate the astronaut, in every of the 25 levels, to a black hole that will eventually return her to earth. The player's instrument to reach the often - what a drag! - quite inconveniently positioned black holes is a gravity gun. While firing it, the astronaut accelerates to the nearest asteroid available, thus resulting in a tarzanian swinging around asteroids until either reaching the black whole, colliding with deadly objects, or drifting too far off into space and subsequently being lost. Video 1 shows some examples of the described gameplay.

<div class="centered">
  <iframe src="//player.vimeo.com/video/100286576" width="320" height="568" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <br><small class="grey after">Video 1: some gameplay</small>
</div>

### Iterating ideas

Before setting on the final concept of the game as described above, I did some iterations with other designs. In one of my previous ideas, for example, the player controlled a black whole. The goal was to for the player to absorb various objects (planets, space ships, etc.) that constantly float towards the black hole before other, enemy black holes would do so. To outmaneuver these enemies, the player had to move her black hole around the screen skillfully. By creating a rough prototype of this concept, however, I quickly learned that the resulting gameplay - the player had to move his/her finger around the screen to relocate the black hole - led to hectic scribbling and was, in sum, unsatisfactory. The important lesson for me here was: test concepts about gameplay as early as possible, while you easily find yourself open to revise or even completely dismiss ideas.


### Implementing the concept

In the following, I will describe and exemplify how I implemented the described gameplay with the Phaser framework (note: I am using the, as of writing this article, latest version 2.0.7). I will concentrate on the astronaut and how she interacts with asteroids upon user input in order to move around a level. While I will present all parts required to define a runnable demo, I will not go into specifics about every aspect of using the Phaser framework. Interested readers should look at more comprehensive introductions, like the extensive book <a href="https://www.discoverphaser.com/" target="_blank">Discover phaser</a> by Thomas Palef.

As a foundation, Phaser requires the initialization of game object as shown in listing 1. The function responsible for this requires as parameters the game's intended width and height (for example, 640 and 480 pixels) as well as the rendering method (either Canvas or WebGL). <code class="language-javascript">Phaser.AUTO</code> lets Phaser select the most appropriate rendering method. An additional parameter can be used to select a DOM element (such as div) into which the game's canvas will be injected, in this case a div with the id <code class="language-javascript">'game'</code>.

```javascript
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');
```
<small class="grey after">Listing 1: instantiating the phaser game object.</small>

A game in Phaser consists of at least one state. A game state typically represents a distinct set of functionality. For example, one state is responsible for a game's menu while another is responsible for the actual gameplay. Each state typically consists of at least the three functions <code class="language-javascript">preload</code>, <code class="language-javascript">create</code>, and <code class="language-javascript">update</code> which are described in listing 2.

```javascript
...
var mainState = {
  preload: function() {
    // called once upon instantiation of the state
    // typically used to load required assets
  },
  create: function() {
    // called once after the preload function
    // typically used to set up the game
  },
  update: function() {
    // called 60 times per second
    // typically used to react to user input, define game logic etc.
  }
}
```
<small class="grey after">Listing 2: definition of a state.</small>

Having defined the (in this case) only state, it can be added to the game and immediately started as shown in listing 3.

```javascript
...
game.state.add('main', mainState);
game.state.start('main');
```
<small class="grey after">Listing 3: adding the state to the game and starting it.</small>

Having this basic setup in place, the required sprites can be loaded within the preload function as shown in listing 4. In this case, we load sprites for the astronaut, asteroids, and the gravity ray that the astronaut can fire to the closest asteroid. And that is already it for the preload function.

```javascript
...
game.load.image('astronaut', 'assets/astronaut.png');
game.load.image('asteroid', 'assets/asteroid.png');
game.load.image('gravityRay', 'assets/gravityray.png');
...
```
<small class="grey after">Listing 4: loading assets in the preload function.</small>

In the create function, first, Phaser's arcade physics system (more about physics systems in a latter article) is activated as shown in listing 5. It allows to assign bodies to sprites in the game world, upon which effects like gravity or acceleration can be applied and which can be checked for collisions.

```javascript
...
game.physics.startSystem(Phaser.Physics.ARCADE);
...
```
<small class="grey after">Listing 5: activating the arcade physics system.</small>

Next, in the create function, the gravity ray, asteroids, and astronaut are placed in the world using the priorly loaded assets. As shown in listing 6, the gravity ray is positioned in the game world's left top corner - the position will later be adjusted with regard to the position of the astronaut from which the gravity ray is to originate. The gravity ray's anchor is set to be vertically centered. The gravity ray's visibility is further set to false because the ray should only be visible upon user input.

```javascript
...
// create gravity ray between astronaut and closest asteroid:
this.gravityRay = game.add.sprite(0, 0, 'gravityray');
this.gravityRay.anchor.setTo(0, 0.5);
this.gravityRay.visible = false;
...
```
<small class="grey after">Listing 6: placing the gravity ray to the world.</small>

In this demo, 7 asteroids are added to the world as shown in listing 7. Every asteroid is positioned randomly in the game world using Phaser's <code class="language-javascript">rnd.integerInRange</code>. A border of 100 pixels is excluded from potential asteroid positions. (Please note: in the actual game, every asteroid's position is manually defined for every level.) Furthermore, every asteroid's anchor is centered so that the astronaut will later not accelerate towards the top left corner of an asteroids, but towards its center. Also, the arcade physics system is activated for every asteroid, providing it with a physics body. The asteroid is then added the the priorly defined asteroids group, which combines asteroids for latter batch-processing.

```javascript
...
// (randomly) place asteroids and add to group:
this.asteroids = game.add.group();
for (var i = 0; i < 7; i++) {
  var asteroid = game.add.sprite(
    game.rnd.integerInRange(100, game.world.width - 100),
    game.rnd.integerInRange(100, game.world.height - 100),
    'asteroid');
  asteroid.anchor.setTo(0.5, 0.5);
  game.physics.enable(asteroid, Phaser.Physics.ARCADE);
  this.asteroids.add(asteroid);
};
...
```
<small class="grey after">Listing 7: (randomly) placing asteroids to the world.</small>

Finally, in the create function, the astronaut is positioned in the center of the game world as shown in listing 8. Its anchor is centered so that the astronaut will later rotate around its center (and not around its top left point) from which the gravity gun is fired. As in the case of every asteroid, the physics system is activated for the astronaut to provide it with a physics body.

```javascript
...
// create astronaut at the center of the world:
this.astronaut = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'astronaut');
this.astronaut.anchor.setTo(0.5, 0.5);
game.physics.enable(this.astronaut, Phaser.Physics.ARCADE);
...
```
<small class="grey after">Listing 8: placing the astronaut to the world.</small>

Having set the stage for the game in the create function, in the following, the update function is filled with the logic needed to enable player controls.

First, the closest asteroid to the player and its distance is determined as shown in listing 9. The initial distance is set to a highest possible value. In the following, the group of asteroids from the create function is iterated. For every asteroid, its distance to the astronaut is calculated using a helper function available in the arcade physics system called <code class="language-javascript">distanceBetween</code>, which takes as input two arcade physics bodies and returns the distance between their anchor points. If the determined distance is smaller than the currently smallest one, this distance is stored and the corresponding asteroid is set to be the closest one.

```javascript
...
var distance = Number.MAX_VALUE;
var closestAsteroid;
this.asteroids.forEach(function(ast){
  var tempDistance = this.distanceBetween(ast, this.astronaut);
  if(tempDistance < distance){
    distance = tempDistance;
    closestAsteroid = ast;
  }
}, this);
...
```
<small class="grey after">Listing 9: determining the closest asteroid to the astronaut and its distance.</small>

Next, as shown in listing 10, the determined minimal distance is checked to be beneath a certain threshold, in this case 250. If the threshold is reached, the astronaut has drifted too far off and the game is lost. In this case, to keep things simple, rather than showing a game over menu, the game's sole main state is restarted.

```javascript
...
if(distance > 250){
  game.state.start('main');
}
...
```
<small class="grey after">Listing 10: restarting the game if the astronaut has drifted off too far.</small>

Next, within the update function, it is checked whether the user exerts control as shown in listing 11. In Gravity Quest, user input consists of the user holding down a pointer - either the mouse on a computer or a finger on a touch device. If user input is detected, the force with which to accelerate the astronaut to the closest asteroid is determined. In this case, the force is set to be at least 30 and potentially higher, depending on how close the astronaut is to the closest asteroid. The intended effect is to make the gravity gun stronger the closer the object it is fired at is. The value of 30 is not fixed but results from some experimentation on playability and personal preference. Of course, feel free to experiment with it. The player is then accelerated to the closest asteroid with the calculated force using the arcade physics system's <code class="language-javascript">accelerateToObject</code> function. Furthermore, the astronaut is rotated to face towards the closest asteroid using the arcade physics system's <code class="language-javascript">angleBetween</code> function. Here it is important that the astronaut body's anchor is centered (see listing 8) to receive the intended rotation.

```javascript
...
if(game.input.activePointer.isDown){
  var force = Math.min(30, 30 * (1 - distance / 250));
  game.physics.arcade.accelerateToObject(this.astronaut, closestAsteroid, force);

  this.astronaut.rotation = game.physics.arcade.angleBetween(this.astronaut, closestAsteroid);
}
...
```
<small class="grey after">Listing 11: accelerating the astronaut to the closest asteroid upon user input.</small>

Next to accelerating the astronaut, the firing of the gravity gun should be visualized. To achieve this, the gravity ray is made visible, placed, scaled, and rotated upon user input as shown in listing 12. First, the gravity ray is made visible (it was initially set to be invisible in listing 6). Then, its position is matched to the one of the astronaut, from where the ray is to origin. The rotation of the gravity ray is set, similar to the astronaut's, using the <code class="language-javascript">angleBetween</code> function. The gravity ray's width is set to be the distance from the astronaut to the closest asteroid, minus this asteroid's radius - this ensures the line to end at the asteroid's surface rather than at its center. Finally, the gravity ray's height is set in consideration of the astronaut's distance to the closest asteroid. The intention here is to make the ray smaller if the distance is high, thus indicating the lower force with which the astronaut is accelerated.

```javascript
...
if(game.input.activePointer.isDown){
  ...
  this.gravityRay.visible = true;
  this.gravityRay.x = this.astronaut.x;
  this.gravityRay.y = this.astronaut.y;
  this.gravityRay.rotation = game.physics.arcade.angleBetween(this.astronaut, closestAsteroid);
  this.gravityRay.width = distance - closestAsteroid.width * 0.5;
  this.gravityRay.height = Math.min(15, 15 * (1 - distance / 250));
}
...
```
<small class="grey after">Listing 12: rendering the gravity ray from the astronaut to the closest asteroid.</small>

Finally, the astronaut's acceleration needs to be stopped and the gravity ray needs to be hidden once to user input ends as shown in listing 13.

```javascript
...
if(game.input.activePointer.isDown){
  ...
} else {
  game.physics.arcade.accelerateToObject(this.astronaut, closestAsteroid, 0);
  this.gravityRay.visible = false;
}
...
```
<small class="grey after">Listing 13: removing the gravity ray and stopping acceleration when user input stops.</small>


### Demo

Press the button below to play a demo, combining the concepts described above. In the demo, press anywhere (and hold the pressure) to accelerate the astronaut towards the nearest asteroid.

<a href="demo/gameplay_demo.html" class="btn btn-primary btn-lg active" target="_blank">Play demo...</a>

### Conclusion

And that is all that's needed to implement Gravity Quest's basic gameplay. The complete, commented code is available in a <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a>. Building upon this basis, enhancements can easily be added. For example, asteroids can also accelerate towards the astronaut when being targeted by the gravity gun for more realistic physics. Or, various effects, such as particle emitters or astronaut animations, can be added to make things more interesting, as I will discuss in a following article. Before that, however, I will discuss some more details about implementing the gameplay, specifically collision detection, in the <a href="gameplay_implementation_collision.html">next article</a>.
      </p>

### Resources linked in this article
* <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's App store</a>
* <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a>
* <a href="https://www.discoverphaser.com/" target="_blank">Discover phaser</a><small class="grey"> - a book written about Phaser</small>
* <a href="demo/gameplay_demo.html" target="_blank">Gravity Quest gameplay demo</a><small class="grey"> - play a demo of the gameplay concept described in this article</small>
* <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a><small class="grey"> - complete, commented code of this gameplay demo</small>