---
layout: post
title: Gravity Quest - Visuals and sound
slug: gravityquest-visuals
date: 2014-09-02 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

**Other posts in this series**
* [Introduction and technology choice]({% post_url 2014-08-27-gravityquest-intro %})
* [Gameplay design and implementation]({% post_url 2014-08-28-gravityquest-gameplay %})
* [Gameplay implementation: collision detection]({% post_url 2014-08-29-gravityquest-collision %})
* Visuals and sound
* [Level design]({% post_url 2014-09-06-gravityquest-levels %})
* [Distribution]({% post_url 2014-09-11-gravityquest-distribution %})

In the <a href="gameplay_implementation_collision.html">previous article</a>, I discussed the collision detection used in <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest</a> (see at <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Apple's App store</a>), thus finalizing the part about the game's gameplay. In this article, I present how Gravity Quest's visuals and sound came to live.

For Gravity Quest, my goals with regard to visuals and sound were quite low - I am by no means an artist and I, honestly, dreaded the effort it takes to create truly outstanding visuals and sound. My goal was thus foremost to create a coherent experience - to give Gravity Quest a distinct look and feel.


### Painting sprites

I decided to pursue a pixel art style for multiple reasons. First, pixel art induces constraints, which I hoped would help in creating a cohesive style. Second, pixel art is as of this writing experiencing a lot of attention, eventually even being considered to be <a href="http://www.theverge.com/2014/7/3/5865849/pixel-art-is-here-to-stay" target="_blank">the future of gaming</a>. Be it nostalgia or the timelessness of pixel art, I personally appreciate this trend. Third, I reasoned that a limited amount of pixels would reduce the required effort to create visuals (this was very naive). A great article describes <a href="http://design.tutsplus.com/articles/whats-the-deal-with-pixel-art--cms-21759" target="_blank">what's the deal with pixel art</a>.


To create the game's sprites, I mostly used the <a href="http://pixenapp.com/" target="_blank">Pixen app</a> for Mac OS. It is available on the Apple App store or can be compiled from the xCode project freely available from <a href="https://github.com/Pixen/Pixen" target="_blank">GitHub</a>. Pixen is designed to create pixel art, offering a well-selected set of drawing tools, layers to work with, and supports the creation of animations.


Creating the artwork was marked by continuous iterations. For example, image 1 shows some versions of the astronaut. Their differences were sometimes major, as the complete re-design from version 1 to 2 or adding animations in version 5, and sometimes minor, like changing the hands' color from black (invisible in front of the black space) to dark gray in version 3.

{% include image name="astronaut_versions.png" caption="Image 1: some versions of the astronaut sprite" %}

To get inspired for the shapes and colors to use in the game's sprites, I used Google's image search to get photos of these objects, like asteroids, explosions, or space ships.


### Animations

Much effort also went into animations. Despite being certainly limited, there are some animations present in the game. Novae feature some flickering as shown in image 2, aiming to make them appear ever-active. Anti-gravitational force fields constantly emit expanding gravitational waves, as shown in image 3, which required stoic endurance with Pixen's circle tool. The last two frames seem blurred out because the expanding ray's transparency is increased to simulate them fading out. The minerals sparkle from time to time as can be seen in image 4. Aliens have ever rotating lights, which aim to suggest them being alive as seen in image 5. These lights turn red once an UFO follows the astronaut, while also activating a deadly ray. Finally, the astronaut features some minimal animations a shown already in image 1.

{% include image name="nova_animation.png" caption="Image 2: nova animations" %}

{% include image name="antigravitational_forcefield_animation.png" caption="Image 3: anti-gravitational force field animations" %}

{% include image name="mineral_animation.png" caption="Image 4: mineral animations" %}

{% include image name="alien_animation.png" caption="Image 5: alien animations" %}


Animations can be used in Phaser by first loading the sprite sheet containing the animation frames in the preload function, as shown for the novae and the astronaut in listing 1. It is further defined that every frame has a width and height of 32 pixels. This and the following code extends that presented in the <a href="gameplay_implementation_collision.html">article about gameplay implementation, specifically collision detection</a>.

```javascript
...
// instead of: game.load.image('nova', 'assets/nova.png');
game.load.spritesheet('nova', 'assets/nova_animation.png', 32, 32);
// instead of: game.load.image('astronaut', 'assets/astronaut.png');
game.load.image('astronaut', 'assets/astronaut_animation.png', 20, 32);
...
```
<small class="grey after">Listing 1: loading sprite sheet containing animation frames for novae and astronaut.</small>

Next, within the create function, the animations are defined when creating the corresponding sprite as shown in listing 2. Upon creation of the animation, the order in which frames ought to be played can be defined. In the case of the novae, the defined animation is immediately started. When starting the animation, the framerate (here: 5) and whether to loop the animation (here: true) can be specified.

```javascript
...
// (randomly) place novae and add to group:
this.novae = game.add.group();
for (var i = 0; i < 3; i++) {
  var nova = game.add.sprite(
    game.rnd.integerInRange(100, game.world.width - 100),
    game.rnd.integerInRange(100, game.world.height - 100),
    'nova');
  nova.anchor.setTo(0.5, 0.5);

  // define and start animation:
  nova.animations.add('flicker', [0,1,2,3,2,1]);
  nova.animations.play('flicker', 5, true);

  this.novae.add(nova);
};
...
// create astronaut at the center of the world:
this.astronaut = game.add.sprite(game.world.width * 0.5, game.world.height * 0.5, 'astronaut');
this.astronaut.animations.add('idle', [0]);
this.astronaut.animations.add('firing', [1]);
...
```
<small class="grey after">Listing 2: defining and starting the animation.</small>

In the case of the astronaut, the animation is played when the gravity gun is fired in the update function. The code is thus placed in the if-else statement used to determine whether the gravity gun is fired as shown in listing 3.

```javascript
...
if(game.input.activePointer.isDown){
  ...
  // animate astronaut:
  this.astronaut.animations.play('firing', 1, false);
} else {
  ...
  // animate astronaut:
  this.astronaut.animations.play('idle', 1, false);
}
...
```
<small class="grey after">Listing 3: playing the astronaut animation when the gravity gun is fired.</small>

Overall, I learned from creating Gravity Quest's visuals that my naive ideas about pixel art were certainly wrong. Limited amounts of pixels do not necessarily reduce effort. Rather, the induced constraints make it even harder for the designer to create the desired look, focusing on relevant details, and nailing appropriate proportions.


### Typography

For typography, I selected the free (also for commercial use) font <a href="http://kottke.org/plus/type/silkscreen/" target="_blank">silkscreen</a> for its pixelart-esque look. Silkscreen is provided in a TrueType format, while Phaser requires bitmap fonts. To create bitmap fonts from TrueType ones, I used the free <a href="http://kvazars.com/littera/" target="_blank">littera bitmap font generator</a>. It outputs bitmap font spritesheets for given font files in configurable size and color. I created multiple variants of silkscreen bitmap fonts, differing in color (white or black) and size.


### Visual effects

Visual effects, if correctly applied, can turn a dull game into something truly exciting. So here is a description of the visual effects used in Gravity Quest.


#### Particle emitters

Some of the effects depend on Phaser's particle emitters. A particle emitter, in a developer-defined way, generates multiple instances of sprites. It can be used to realize effects like rain, explosions, smoke, sparklings etc. In Gravity Quest, one particle emitter is used to indicate the usage of the gravity gun. The following code extends the one presented when discussing Gravity Quest's gameplay implementation in this serie's <a href="gameplay_design_and_implementation.html">second article</a>. Listing 4 shows how to load the required sprites in the preload function. The two particles are shown in image 6.

{% include image name="particle_1.png"%}
{% include image name="particle_2.png" caption="Image 6: particles for gravity gun emitter." %}

```javascript
game.load.image('gun_particle_1', 'assets/gun_particle_1.png');
game.load.image('gun_particle_2', 'assets/gun_particle_2.png');
```
<small class="grey after">Listing 4: loading the particles for the gravity gun emitter.</small>


Listing 5 shows how the gunEmitter is defined in the create function. The first two parameters specify the emitters position. The emitter is initially located at the world's origin because the position will later be constantly updated. The thrid parameter defines the maximum total number of particles in the emitter. In the next line, the previously loaded particle sprites are defined to be used by the emitter.

```javascript
...
this.gunEmitter = game.add.emitter(0, 0, 25);
this.gunEmitter.makeParticles(['gun_particle_1', 'gun_particle_2']);
...
```
<small class="grey after">Listing 5: defining the particle emitter for the gravity gun in the create function.</small>

Having the emitter defined, it can be used upon the astronaut firing the gravity gun as shown in listing 6. The presented code runs within the update function in the if-else statement used to determine if the gravity gun is fired. First, the emitter's position is updated to be at the edge of the closest asteroid to the astronaut (the one that is targeted by the gravity gun). Next, if the emitter is not already firing, it is started. Finally, the alpha of the emitter, and thus of all its particles, is set depending on the astronaut's distance to the closest asteroid. This way, only light sparkling can be seen if the gravity gun is fired from far away.

```javascript
...
if(game.input.activePointer.isDown){
  ...
  // emit particles:
  this.gunEmitter.x = closestAsteroid.x - Math.cos(angle) * closestAsteroid.width * 0.5;
  this.gunEmitter.y = closestAsteroid.y - Math.sin(angle) * closestAsteroid.width * 0.5;
  if(!this.gunEmitter.on){
    this.gunEmitter.start(false, 100, 15);
  }
  this.gunEmitter.alpha = 1 - distance / 250; // make emitter visible
  ...
} ...
```
<small class="grey after">Listing 6: starting the emitter when the astronaut fires the gravity gun.</small>

To complete this effect, the emitter is stopped once the gravity gun is no longer fired as shown in listing 7. Again, this code is used in the update function in the if-else statement used to determine whether the gravity gun is fired or not.

```javascript
...
if(game.input.activePointer.isDown){
  ...
} else {
  ...
  // stop particle emitter:
  this.gunEmitter.on = false;
}
...
```
<small class="grey after">Listing 7: stopping the emitter when the gravity gun is no longer fired.</small>

Further particle emitters in Gravity Quest are used when the astronaut is killed by novae, thermoactive asteroids, or aliens, when aliens collide, or in the intro to create the shuttle's smoke. Overall, they are a versatile tool to bring some life to games created with Phaser.


#### Parallax scrolling

Another commonly used effect in 2D games is parallax scrolling. It means, that upon camera movement, the background moves with a different speed than objects in the foreground, creating an effect of depth. Phaser provides functions to implement horizontal parallax scrolling (often used in platformer style games). In gravity quest, however, the astronaut may move horizontally or vertically, so that I ended up implementing my own solution.


For it to work, first, camera movement needs to be enabled. In order to do so, the game world's bounds need to be made bigger than the actual game in the create function as shown in listing 8. (Note: this will also lead to much more dispersed asteroids and novae in the demo because they are randomly placed within the - now larger - world's bounds).

```javascript
...
// make the world larger than the actual canvas (for camera to be able to follow):
game.world.setBounds(0, 0, 1280, 960);
...
```
<small class="grey after">Listing 8: increasing world bounds.</small>


Next, in the create function, the game's camera is instructed to follow the astronaut as shown in listing 9. There are multiple follow modes - <code class="language-javascript">FOLLOW_TOPDOWN_TIGHT</code> means that the astronaut's movements are followed closely, both horizontally and vertically, by the camera.

```javascript
...
// make camera follow player:
game.camera.follow(this.astronaut, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
...
```
<small class="grey after">Listing 9: instructing the camera to follow the astronaut.</small>


For parallax scrolling to work, a background sprite needs to be loaded in the preload function and placed in the world as a tilesprite in the create function as shown in listing 10. In a tile sprite, the defined sprite is horizontally and vertically repeated.

```javascript
...
// load background sprite in the preload function:
game.load.image('background', 'assets/background.png');
...
// place background in the create function:
this.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'background');
...
```
<small class="grey after">Listing 10: load background and place it.</small>


To implement parallax scrolling, first, in the create function the position of the camera is stored as shown in listing 11. It is denoted as <code class="language-javascript">cameraLastX</code> and <code class="language-javascript">cameraLastY</code> because this last position will used in the following update loop to implement parallax scrolling.

```javascript
...
// store cameras position:
this.cameraLastX = this.camera.x;
this.cameraLastY = this.camera.y;
...
```
<small class="grey after">Listing 11: store camera position in the create function.</small>


Now, in the update circle, the camera's current position can be compared to the last stored one as shown in listing 12. If the position is changed, the background is shifted and the new position is stored.

```javascript
...
// compare current camera position with last one and shift background if it differs:
if(game.camera.x !== this.cameraLastX){
  this.background.x -= 0.2 * (this.cameraLastX - game.camera.x);
  this.cameraLastX = game.camera.x;
}
if(game.camera.y !== this.cameraLastY){
  this.background.y -= 0.2 * (this.cameraLastY - game.camera.y);
  this.cameraLastY = game.camera.y;
}
...
```
<small class="grey after">Listing 12: compare current camera position to last stored one and eventually shift background.</small>


### Sound

For sound, I mostly depended on quality sources that I collected over the months working on Gravity Quest. Here are my resources:

* <a href="http://www.universalsoundfx.com/" target="_blank">UniversalSoundFX</a> is a library of over 3000 sounds that can be used royalty free in (commercial) projects / games. I got to know about it because Richard Davey (creator of Phaser) once tweeted about it. I find the 20$ a good investment, considering the broad range of sounds that fit various games.
* <a href="http://drpetter.se/project_sfxr.html" target="_blank">Sfrx</a> and the thereupon based <a href="http://www.bfxr.net/" target="_blank">Bfrx</a> are tools that randomly create sounds of a certain style and allow you to fine tune them with regard to various properties. I did not manage to master these tools, but 2 of the random sounds they generated made it into the final game (try to guess which...).
* <a href="http://dig.ccmixter.org/" target="_blank">CC mixter</a> is a repository of music under the creative commons license. The site allows to search for songs regarding title or creator and what clearly states what is required to correctly use the songs (commercially). Gravity quest features <a href="http://dig.ccmixter.org/files/Javolenus/37693" target="_blank">'C95 - Routine Maintenance Mission' by Javolenus featuring Nickleus</a> for the game's menu and <a href="http://dig.ccmixter.org/files/Karstenholymoly/40799" target="_blank">'Space Intro' by Karsten Holy Moly</a> for the intro - both songs are listed in the ending scores.
* <a href="http://www.nosoapradio.us/" target="_blank">Nosoapradio</a> is the repository of music by Deceased Superior Technician (DST). The songs can be used in (commercial) games and the website has a very nice filtering interface to select suited songs. Gravity quest features 'ALightIntro' in the outro, and the song is listed in the ending score.

There are certainly much more good sources of (free) audio files to use in games. If you have some at hand, drop them in the comments section below.


### Demo

Press the button below to play a demo where some animations, particle emitters, and parallax scrolling are implemented as described above.


<a href="demo/visuals_demo.html" class="btn btn-primary btn-lg active" target="_blank">Play demo...</a>


### Conclusion

Creating great visuals and sound for a game is similarly important as it is hard to do. Creating Gravity Quest's visuals and sound, despite them being far from perfect, by approximation took me more time than coding the game's logic. I hope this article provides some interesting resources for you to get started. The complete, commented source code of the demo linked in this article, featuring some of the final game's effects, is as usually available <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">at GitHub</a>. In the following article, I will talk about <a href="level_design.html">creating Gravity Quest's levels with a participatory approach</a>.



### Resources linked in this article
* <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's App store</a>
* <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a>
* <a href="http://www.theverge.com/2014/7/3/5865849/pixel-art-is-here-to-stay" target="_blank">Pixel art games aren't retro, they're the future</a><small class="grey"> - recent article about pixel art in computer games</small>
* <a href="http://design.tutsplus.com/articles/whats-the-deal-with-pixel-art--cms-21759" target="_blank"><small class="grey"> - article explaining the fundamentals of pixel art</small>
* <a href="http://pixenapp.com/" target="_blank">Pixen app</a><small class="grey"> - pixel art tool for Mac OS</small>
* <a href="https://github.com/Pixen/Pixen" target="_blank">Pixen app GitHub repository</a>
* <a href="http://kottke.org/plus/type/silkscreen/" target="_blank">Silkscreen</a><small class="grey"> - pixel font, free for personal and commercial use</small>
* <a href="http://kvazars.com/littera/" target="_blank">Littera</a><small class="grey"> - free bitmap font generator</small>
* <a href="http://www.universalsoundfx.com/" target="_blank">UniversalSoundFX</a><small class="grey"> - collection of over 3000 sounds for video games</small>
* <a href="http://drpetter.se/project_sfxr.html" target="_blank">Sfrx</a><small class="grey"> - tool to (randomly) create game sounds</small>
* <a href="http://www.bfxr.net/" target="_blank">Bfrx</a><small class="grey"> - tool elaborating sfrx</small>
* <a href="http://dig.ccmixter.org/" target="_blank">CC mixter</a><small class="grey"> - collection of music under the creative commons license</small>
* <a href="http://dig.ccmixter.org/files/Javolenus/37693" target="_blank">'C95 - Routine Maintenance Mission' by Javolenus featuring Nickleus</a><small class="grey"> - song used in the menu</small>
* <a href="http://dig.ccmixter.org/files/Karstenholymoly/40799" target="_blank">'Space Intro' by Karsten Holy Moly</a><small class="grey"> - song used in the intro</small>
* <a href="http://www.nosoapradio.us/" target="_blank">Nosoapradio</a><small class="grey"> - collection of music by Deceased Superior Technician (DST)</small>
* <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a><small class="grey"> - complete, commented code of the demo</small>
