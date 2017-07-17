---
layout: post
title: Gravity Quest - Introduction and technology choice
slug: gravityquest-intro
date: 2014-08-27 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

## Introduction

In early 2014, having some spare time at hand, I set out to develop a mobile game as a side project. The result is the game "Gravity Quest", which is available for iPhone on the <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Apple App store</a> and for which I have created the small <a href="/gravityquest" target="_blank">Gravity Quest's website</a>.

In this series of articles I want to provide some insights into creating that game using the <a href="http://www.phaser.io" target="_blank">Phaser framework</a>. Gravity Quest was my first attempt to game development, so I learned by doing. Thus, these articles are not, and cannot, be meant to state indisputable 'rights' or even best practices in game development - neither with Phaser nor in general. Rather, I intend to provide some insights into the challenges I faced. I would be happy to see my attempts to address these challenges as starting points of fruitful discussions. Furthermore, I want to share the many helpful resources I discovered.


This series will (likely) comprise the following parts:

* Introduction and technology choice
* [Gameplay design and implementation]({% post_url 2014-08-28-gravityquest-gameplay %})
* [Gameplay implementation: collision detection]({% post_url 2014-08-29-gravityquest-collision %})
* [Visuals and sound]({% post_url 2014-09-02-gravityquest-visuals %})
* [Level design]({% post_url 2014-09-06-gravityquest-levels %})
* [Distribution]({% post_url 2014-09-11-gravityquest-distribution %})

The articles cover a broad spectrum of topics, from conceptual considerations to technical, Phaser-related details. The attempt here is to draw a holistic picture, including the various aspect one faces when (solely) creating a game. If you are interested only in certain aspects, you might find some of the many links to external resources useful. I will provide a list of links at the end of every article.

I will cover the technology choice part within this article and the other parts in following articles.

## Technology choice

When I decided to try out game development, I was immediately drawn to HTML 5 frameworks. I already knew some JavaScript and was intrigued by the prospect to run or even distribute the resulting game on different platforms and devices.

Among the many HTML5 game frameworks (see for example: <a href="http://html5gameengine.com/" target="_blank">HTML 5 Game Engines - Find Which is Right for You</a>), I quickly settled for Phaser. There is extensive material available about why it is useful to rely on Phaser, for example this nice video: <a href="https://www.youtube.com/watch?v=96z7Y-DYz2Y/" target="_blank">Build Games with JavaScript and Phaser</a>. The following aspects attracted me to Phaser in particular:        

<ul>
  <li>
    Phaser's main developer, Richard Davey (<a href="https://twitter.com/photonstorm" target="_blank">Richard Davey's Twitter profile</a>), regularly corresponds with Phaser developers on the official support site, <a href="http://www.html5gamedevs.com/forum/14-phaser/" target="_blank">Phaser - HTML 5 Game Devs Forum</a> and frequently pushes updates to <a href="https://github.com/photonstorm/phaser" target="_blank">Phaser's Github repository</a>. Such commitment is great and reassured me that Phaser, despite being quite young, was not a 'dead end'. After all, I was not keen to get invested in a framework that would cease existence soon after.
  </li>
  <li>
    Phaser promised to be easy to learn. I find the basic setup of Phaser games, comprising the functions preload, create, and update, particularly easy to grasp.
  </li>
  <li>
    Lots of official <a href="http://examples.phaser.io" target="_blank">Phaser examples</a> are available, as well as some helpful examples at the <a href="http://gamemechanicexplorer.com/" target="_blank">Game Mechanic Explorer</a>.
  </li>
  <li>
    The community seemed to me thriving. Especially the many discussions at <a href="http://www.html5gamedevs.com/forum/14-phaser/" target="_blank">Phaser - HTML 5 Game Devs Forum</a> ensured me that I would find support when in need and could also distribute and discuss ideas.
  </li>
  <li>
    Various helpful tutorials using Phaser exist, like the ones at <a href="http://www.lessmilk.com" target="_blank">lessmilk.com</a> or by <a href="http://www.codevinsky.com/" target="_blank">codevinsky.com</a>.
  </li>
  <li>
    Lastly (I am just being honest here), I prefer the way Phaser presents itself on <a href="http://www.phaser.io" target="_blank">phaser.io</a> to the way other frameworks do. This aspect may seem trivial, but the care that went into the professional looking, fun presentation appeals to me and suggests these characteristics might also hold for the framework itself.
  </li>
</ul>

Being set on Phaser, I initially played around with it. I implemented few rough prototypes of game ideas, which eventually resulted in the gameplay for Gravity Quest, as I discuss in the next article about <a href="gameplay_design_and_implementation.html">gameplay design and implementation</a>. The code for the demos supporting this article are available at this <a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a>.

<h4>Resources linked in this article:</h4>
<ul>
  <li><a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's App store</a></li>
  <li><a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a></li>
  <li><a href="http://www.phaser.io" target="_blank">Phaser framework</a><small class="grey"> - Phaser's official Website</small></li>
  <li><a href="http://html5gameengine.com/" target="_blank">HTML 5 Game Engines - Find Which is Right for You</a><small class="grey"> - a comparison of HTML5 frameworks</small></li>
  <li><a href="http://scotlandjs.com/speakers/gabe/" target="_blank">Build Games with JavaScript and Phaser</a><small class="grey"> - discusses the advantages of building upon Phaser and illustrates how to build a 'plants vs. zombies' style game</small></li>
  <li><a href="https://twitter.com/photonstorm" target="_blank">Richard Davey's Twitter profile</a><small class="grey"> - Richard Davey is Phaser's main developer</small></li>
  <li><a href="http://www.html5gamedevs.com/forum/14-phaser/" target="_blank">Phaser - HTML 5 Game Devs Forum</a><small class="grey"> - Phaser's official support site</small></li>
  <li><a href="https://github.com/photonstorm/phaser" target="_blank">Phaser's Github repository</a></li>
  <li><a href="http://examples.phaser.io" target="_blank">Phaser examples</a><small class="grey"> - official Phaser examples</small></li>
  <li><a href="http://gamemechanicexplorer.com/" target="_blank">Game Mechanic Explorer</a><small class="grey"> - a collection of tech demos based on Phaser</small></li>
  <li><a href="http://www.lessmilk.com" target="_blank">Lessmilk</a><small class="grey"> - showcase of various games build with Phaser and some great articles</small></li>
  <li><a href="http://www.codevinsky.com/" target="_blank">Codevinsky.com</a><small class="grey"> - contains an extensive article series about creating a flappy bird clone in Phaser</small></li>
  <li><a href="https://github.com/ErikWittern/gravityquest_demo" target="_blank">GitHub repository</a><small class="grey"> - complete, commented code of the demo's supporting this article</small></li>
</ul>

<h4>Share this article:</h4>
<!-- Twitter: -->
<a href="https://twitter.com/share" class="twitter-share-button" data-via="erikwittern">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
</script>
