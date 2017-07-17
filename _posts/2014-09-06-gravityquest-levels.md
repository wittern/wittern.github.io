---
layout: post
title: Gravity Quest - Level design
slug: gravityquest-levels
date: 2014-09-06 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

**Other posts in this series**
* [Introduction and technology choice]({% post_url 2014-08-27-gravityquest-intro %})
* [Gameplay design and implementation]({% post_url 2014-08-28-gravityquest-gameplay %})
* [Gameplay implementation: collision detection]({% post_url 2014-08-29-gravityquest-collision %})
* [Visuals and sound]({% post_url 2014-09-02-gravityquest-visuals %})
* Level design
* [Distribution]({% post_url 2014-09-11-gravityquest-distribution %})

In the <a href="visuals_and_sound.html">previous article</a>, I described how I created the visuals and sound of <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest</a> (see in <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Apple's App store</a>). Having gameplay, visuals, and sound in place, the next task was to come up with levels. Creating levels for Gravity Quest proved to be challenging. As a single level designer, one risks to stick to a certain style, resulting in repetitive levels, which become boring for players fast. Still, I intended the game to feature at least 20 levels (a number chosen completely subjectively) for selling the game to be reasonable. Thus, I needed to find efficient ways to create, edit and represent levels. And, ultimately, that's why I decided to try out a participatory approach to designing levels.


### Level representation

One decision to make before starting to craft Gravity Quest's world was how to represent level data. In platformer games, tile maps are a common approach, which is also supported by Phaser. In tile maps, levels are divided into coarse tiles (rectangles, for example, 16x16, 32x32, or 64x64 pixels in size). For every tile, a texture to render and whether the tile collides with the player or enemies is specified. Tile maps seemed a promising approach for Gravity Quest due to their support in Phaser and the great tools available to create them, for example the <a href="http://www.mapeditor.org/" target="_blank">tiled map editor</a>.

      
However, Gravity Quest's requirements ruled out using tile maps: elements in the levels are of diverse size, not necessarily fitting into a coarse grid. Furthermore, their position needs to be defined very fine granularly. For example, in level 13, the astronaut needs to use the gravity gun to accelerate to an asteroid in the last moment before colliding with a dwarf nova. To create this level, the asteroid and the dwarf nova were positioned pixel-exactly.


Consequently, I decided to store level data in Gravity Quest in JavaScript objects as shown in listing 1. Every element in the level denotes at least <code class="language-javascript">x</code> and <code class="language-javascript">y</code> coordinates. When setting up a level in the gameplay state's <code class="language-javascript">create</code> function, its JavaScript object is iterated and every element is positioned according to these coordinates. Some elements further denote a <code class="language-javascript">key</code> naming the sprite they are using and a <code class="language-javascript">radius</code> which is used for collision detection (see the article on <a href="gameplay_implementation_collision.html">gameplay implementation: collision detection</a>). This information is needed because, for example, asteroids or novae may have different sizes. The value <code class="language-javascript">maxDistance</code> determines per level, how far the astronaut can be away from the closest asteroid before being lost. In some levels, the astronaut communicates through speech bubbles in the beginning. These messages are also stored within the level's object.


```javascript
Game.Level_02 = {
  player: {
    x: 431,
    y: 607,
  },
  asteroids: [
    {
      x: 680,
      y: 410,
      key: "asteroid_32",
      radius: 16
    },
    {
      x: 465,
      y: 548,
      key: "asteroid_32",
      radius: 16
    }
  ],
  target: {
    x: 606,
    y: 307,
    key: "target",
    radius: 18
  },
  goodies: [
    {
      x: 687,
      y: 514
    },
    {
      x: 776,
      y: 361
    },
    {
      x: 517,
      y: 460
    }
  ],
  maxDistance: 250
}
```
<small class="grey after">Listing 1: the JavaScript object defining Gravity Quest's level 2.</small>


### Implementing a level editor

When starting to build levels for Gravity Quest, I initially used my text editor of choice as the main tool. That is, I defined level elements and their positions by writing code. This quickly proved problematic: when a level consists of many elements, their positions become difficult to keep track of in code and shifting them around becomes cumbersome. To increase productivity, I started working on a way to visualize and eventually edit a level. Thus, I started developing a level editor. I relied on <a href="http://fabricjs.com/" target="_blank">Fabric.js</a>, a library that supports drag-and-drop capabilities for HTML5 canvas elements, to display the level and edit its elements. I constantly revised the editor until it reached the following feature set:

* The editor can load any of the existing levels as blueprints to creating new levels.
* Elements can be added from a palette and removed by selecting them and pressing the trash bin button.
* Elements can be moved around using drag and drop.
* Designed levels can be tested from within the editor. To do so, Gravity Quest is started in a pop-up window and the level from the editor is passed to that pop-up window and immediately started. This feature allows for rapid testing of levels and iterating their designs.
* A two-way data-bound JSON representation of the level in design is constantly shown. It allows a) to programmatically adjust level elements (e.g., their coordinates) and b) to copy and paste levels.
* The browser's local storage constantly saves changes made to a level, allowing to pause work and continue later on.

Video 1 shows a short demo of Gravity Quest's level editor.


<div class="centered">
  <iframe src="//player.vimeo.com/video/105260609?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <br><small class="grey after">Video 1: demo of Gravity Quest's level editor</small>
</div>


### Participatory level design

Initially, I used (a temporary version of) the editor running solely on my laptop to create levels. The editor clearly sped up the process of designing levels. However, I still realized that creating over 20 levels was tedious and could easily result in repetitive levels if I was the only one doing it. Thus, I decided to make the editor accessible to friends and family to allow them to provide their levels to the game.

To enable participatory level design with the editor, I extended it slightly. Completed levels can be named and send from the editor to me to review and eventually include them into the final game. I then deployed the editor on <a href="http://www.heroku.com" target="_blank">Heroku</a> to make it accessible on the web. Once the editor was deployed in a (mostly) stable version, I sent around an email to selected friends, asking them to contribute levels to the game. I initially sent my request to 16 people. In some updates and reminders, I repeatedly increased this number to and ultimately addressed 25 people.

Allowing friends to create levels for Gravity Quest had multiple positive effects. First, it resulted in great levels that made it into the final game. All in all, I received 10 levels from 5 friends. Not only are these 40% of the game's levels, they are also all very good and fun to play! Second, the participatory approach proved to be a solid means to beta-test the game. As level-designers were allowed to test out their level, they naturally reviewed the gameplay, visuals, and sound. The level-designers' feedback was very important for improving the game. It included, for example, hints on the speed in which the astronaut moves, the suggestion to move asteroids to the astronaut if targeted by the gravity gun, the suggestion to implement parallax scrolling, or the suggestion to add 3 bonus levels in version 1.1 of the game. Third, this participatory approach to level design acted as an early marketing measure, spreading the word about the game in progress.

Of course, all contributors are thanked for by name in Gravity Quest's outro. I also own all of them a beer - a promise, which I will definitely keep.


### Conclusion

Coming up with many levels is a hard task when developing a game. In the case of Gravity Quest, a level editor was fundamental to ease this task, providing visual feedback on the level's design, speeding up the editing of the level, and allowing to quickly test ideas and designs.


The editor, being deployed and accessible through the web, allowed further to include family and friends into level creation. This not only resulted in great levels but also in valuable feedback and discussions about the game. And it ultimately proved to make the development process more social and fun. If your game requires manual creation of levels, I highly recommend this approach!


In the next, final article of this series, I will discuss <a href="distribution.html">distribution of Gravity Quest</a> on the Apple App store.


### Resources linked in this article
* <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's App store</a>
* <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a>
* <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a><small class="grey"> - complete, commented code of the demos described in other articles of this series</small>
* <a href="http://www.mapeditor.org/" target="_blank">Tiled map editor</a><small class="grey"> - open source editor to create tile maps</small>
* <a href="http://fabricjs.com/" target="_blank">Fabric.js</a><small class="grey"> - JavaScript HTML5 canvas library</small>
* <a href="http://www.heroku.com" target="_blank">Heroku</a><small class="grey"> - Platform as a Service offer to deploy web apps</small>
