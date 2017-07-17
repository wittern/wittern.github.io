---
layout: post
title: Gravity Quest - Distribution
slug: gravityquest-levels
date: 2014-09-11 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

**Other posts in this series**
* [Introduction and technology choice]({% post_url 2014-08-27-gravityquest-intro %})
* [Gameplay design and implementation]({% post_url 2014-08-28-gravityquest-gameplay %})
* [Gameplay implementation: collision detection]({% post_url 2014-08-29-gravityquest-collision %})
* [Visuals and sound]({% post_url 2014-09-02-gravityquest-visuals %})
* [Level design]({% post_url 2014-09-06-gravityquest-levels %})
* Distribution

In the <a href="level_design.html">previous article</a>, I discussed how I created <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's</a> (see at <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Apple's app store</a>) levels using a custom level editor and a participatory approach. This final article of the series will address the game's distribution in the Apple app store.


### Selecting a distribution strategy

One huge advantage of using a Web technology-based game engine like <a href="http://www.phaser.io" target="_blank">Phaser</a> is that it can basically run on any platform or device with a browser. Ideally, this means that one code base can drive multiple distributions, like on a Web site, in the Apple app store, Android's <a href="https://play.google.com/" target="_blank">Google Play</a> store, or the <a href="https://www.mozilla.org/mobile/" target="_blank">Firefox Marketplace</a>.

One possible strategy to distribute a Web technology-based game is to provide it on a Web site. One advantage of this approach is that the game is immediately accessible from any device / platform with a browser. Furthermore, many born-on-the-Web tools can easily be used this way, like <a href="http://www.google.com/analytics/" target="_blank">Google Analytics</a> to track how often and long the game is played. On the other hand, there are less monetization options using this approach compared to selling the game in one of the many app stores. Advertisements are one option, but selling the game or even in-app purchases need custom solutions. Another point to consider, despite probably rather for professional game developers, is that JavaScript code is made available when distributing a game on a Web site.

Another possible strategy to distribute a Web technology-based game is by selling it through one of the many app stores. This strategy has the advantage that payment mechanics and global distribution including user reviews are typically provided by the store. Furthermore, users can download games from the store and play them independent of being online. When choosing this strategy, typically, a container is required that runs the game's HTML page and is compatible with the stores technical requirements and guidelines. Luckily, there are some options available nowadays, like <a href="http://phonegap.com/" target="_blank">PhoneGap</a> or <a href="https://www.ludei.com/cocoonjs/" target="_blank">Cocoon.js</a>.

A main driver when deciding for a distribution strategy is monetization. I initially intended to sell Gravity Quest and then not to bother customers with ads or in-app purchases in the future. I don't like adverts in games and find many in-app purchases annoying, especially when they are designed as a last resort for players to avoid artificial obstacles or fun-reducing mechanics (e.g., waiting times before being able to continue the game). Based on this decision, I chose to distribute the game (initially) on Apple's app store for two reasons rather than on the second most obvious option, Google's Play store for Android. First, there is supposedly a higher tendency of users of the Apple app store to <a href="http://www.forbes.com/sites/ewanspence/2014/05/21/for-mobile-monetization-choose-android-for-ads-and-apple-for-in-app-purchases/" target="_blank">pay for content</a> as compared to users in the Google Play store. Second, when developing for phones, there is a significant smaller amount of devices to test for in the Apple universe as compared to the Android universe.


### Building the game for Apple's app store with gulp.js and Cocoon.js

Having decided to target Apple's app store, I quickly settled on Cocoon.js as a container. Cocoon.js specifically claims to be intended for mobile games, offering some specific optimizations. Furthermore, there exists an extensive forum post about <a href="http://www.html5gamedevs.com/topic/3980-common-phaser-cocoonjs-issues/" target="_blank">known issues when developing Phaser games with Cocoon.js</a>.

To build the final game I relied on <a href="http://gulpjs.com/" target="_blank">gulp.js</a> to perform some optimization tasks. These optimizations result primarily in reduced file sizes, making the game more lightweight on storage. Gulp.js is a stream-based build system depending on Node.js. Gulp.js allows to specify different tasks to perform in order to build a Web-technology-based project or game. Many great resources about gulp.js are available at their <a href="https://github.com/gulpjs/gulp/blob/master/docs/README.md" target="_blank">documentation page on GitHub</a>. Listing 1 shows the specific gulpfile that I created to build Gravity Quest.


```javascript
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  clean = require('gulp-clean'),
  optipng = require('gulp-optipng');
  
gulp.task('scripts', function(){
  return gulp.src([ 'public/javascripts/phaser.js',
            'public/javascripts/load.js',
            'public/javascripts/mute.js',
            'public/javascripts/menu.js',
            'public/javascripts/intro.js',
            'public/javascripts/outro.js',
            'public/javascripts/play.js',
            'public/javascripts/levels.js',
            'public/javascripts/game.js',
            'public/javascripts/asteroid.js',
            'public/javascripts/alien.js',
            'public/javascripts/nova.js',
            'public/javascripts/astronaut.js',
            'public/javascripts/antiForceField.js',
            'public/javascripts/mineral.js',
            'public/javascripts/pauseMenu.js',
            'public/javascripts/victoryMenu.js'
          ])
    .pipe(concat('gravityquest.js'))
    .pipe(gulp.dest('build/javascripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/javascripts'))
    .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('fonts', function(){
  return gulp.src('public/fonts/*')
    .pipe(gulp.dest('build/fonts'))
    .pipe(notify({message: 'Copy fonts task complete'}));
});

gulp.task('sounds', function(){
  return gulp.src('public/sounds/*')
    .pipe(gulp.dest('build/sounds'));
});

gulp.task('images', function(){
  return gulp.src('public/assets/*.png')
    .pipe(optipng(['-o2']))
    .pipe(gulp.dest('build/assets'));
});

gulp.task('clean', function() {
  return gulp.src(['build/javascripts', 'build/assets', 'build/sounds', 'build/fonts'], {read: false})
    .pipe(clean());
});

// this grouping task run by the 'gulp' command:
gulp.task('default', ['clean'], function(){
  gulp.start(
    'scripts', 
    'fonts',
    'images'
    'sounds'
  );
});
```
<small class="grey after">Listing 1: gulpfile used to build Gravity Quest.</small>

As shown in listing 1, a <code class="language-javascript">scripts</code> task concatenates all the game's JavaScript files into a new file created in the build destination called <code class="language-javascript">gravityquest.js</code>. Furthermore, a second, minified version of this file is created. The <code class="language-javascript">fonts</code> and <code class="language-javascript">sounds</code>tasks copy all font- and sound-related files (see the <a href="visuals_and_sound.html">article about visuals and sound</a>) into the build destination. The <code class="language-javascript">images</code> task does the same for images, but also applies an optimization to reduce file sizes. The <code class="language-javascript">clean</code> task empties the build destination. Finally, the <code class="language-javascript">default</code> task brings everything together. It runs the <code class="language-javascript">clean</code> task initially to set the stage and then performs all other defined tasks, resulting in a minified build of the game, that relies only on a single JavaScript file.


Having the final game built, it can be zipped and then uploaded to the Cocoon.js cloud-based compilation system. The compilation system creates a xCode iOS project from the zipped folder to download and further process in <a href="https://developer.apple.com/xcode/" target="_blank">xCode</a>. To actually submit the game to the app store, further steps are required like replacing load screen or icon images (<a href="http://makeappicon.com/" target="_blank">makeappicon.com</a> drastically speeds up the latter task). Furthermore, the code generated by Cocoon.js needs to be signed with the right certificates etc. To get a detailed description of the necessary steps, I recommend this <a href="https://www.youtube.com/watch?v=rRlOdp4uZoo" target="_blank">video on how to submit an app to Apple's app store</a>.


### Conclusion

Distributing Gravity Quest through Apple's app store was my first attempt in distributing any game. I learned multiple things using this approach:

* Tools like gulp.js, Cocoon.js, or makeappicon.com, make distribution easier and faster - their utilization may induce some up-front efforts for learning or configuration but reduce efforts in the long run, for example when pushing multiple versions over time.
* Some of the <a href="http://www.html5gamedevs.com/topic/3980-common-phaser-cocoonjs-issues/" target="_blank">known issues when developing Phaser games with Cocoon.js</a> affected the way the game turned out. For example, sound is only activated after the first user input, which results in users not being able to hear the music in the menu as intended. Or, WebGL is as of writing this article not supported in the standard iOS WebView in which Cocoon.js runs the game. (Note: this will change with the <a href="http://blog.ludei.com/webgl-ios-8-safari-webview/" target="_blank">introduction of WebGL in WebViews iOS 8</a>).
* The monetization strategy chosen for Gravity Quest, i.e., selling the game for a fixed price, was motivated by my opinion that games should ideally not bother gamers with adverts or in-app purchases. However, as of writing this article, the game has sold only few over 50 copies. Admittedly, marketing measures for Gravity Quest have so far been sparse - I consider this series of articles to have mostly contributed to this regard. Still, from the so far hundreds of visitors on Wittern.net, very few bought the game. My impression is, thus, that my monetization strategy is not fit for the game or generally difficult to succeed with. In consequence, I might consider different strategies in the future, e.g., making the game free and showing ads. I would be very interested in any options / experiences you have to share to this regard!

Gravity Quest has been a great project during the last months. From <a href="introduction_and_technology_choice.html">technology choice</a>, over <a href="gameplay_design_and_implementation.html">gameplay design and implemention</a>, creating the game's <a href="visuals_and_sound.html">visuals and sound</a>, a participatory approach to <a href="level_design.html">level design</a>, to distributing the game on Apple's app store, I learned a whole lot - which motivated me to write this series of articles. Sales figures might not be great, but I perceive the effort I spent well invested considering the lessons, discussions, and social interactions I got out of it.

Thus, I can only recommend to develop your own mobile game!


### Resources linked in this article
* <a href="https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&uo=4" target="itunes_store">Gravity Quest at Apple's app store</a>
* <a href="http://www.wittern.net/gravityquest" target="_blank">Gravity Quest's website</a>
* <a href="http://www.phaser.io" target="_blank">Phaser</a><small class="grey"> - the HTML5 game engine running Gravity Quest</small>
* <a href="https://play.google.com/" target="_blank">Google Play store</a>
* <a href="https://www.mozilla.org/mobile/" target="_blank">Firefox Marketplace</a>
* <a href="http://www.google.com/analytics/" target="_blank">Google Analytics</a><small class="grey"> - service to track visitors of web sites and their behavior</small>
* <a href="http://phonegap.com/" target="_blank">PhoneGap</a><small class="grey"> - container to run Web technology-based apps on smart phones</small>
* <a href="https://www.ludei.com/cocoonjs/" target="_blank">Cocoon.js</a><small class="grey"> - similar to phonegap, but claims to optimize for games</small>
* <a href="http://www.forbes.com/sites/ewanspence/2014/05/21/for-mobile-monetization-choose-android-for-ads-and-apple-for-in-app-purchases/" target="_blank">For mobile monetization, choose Android for ads and Apple for in-app purchases</a><small class="grey"> - Forbes article discussing willingness to pay in different app stores</small>
* <a href="http://www.html5gamedevs.com/topic/3980-common-phaser-cocoonjs-issues/" target="_blank">Common Phaser + CocoonJS issues</a><small class="grey"> - actively maintained forum post about common issues when using Phaser.js with Cocoon.js</small>
* <a href="http://gulpjs.com/" target="_blank">gulp.js</a><small class="grey"> - a stream-based build system</small>
* <a href="https://github.com/gulpjs/gulp/blob/master/docs/README.md" target="_blank">gulp.js documentation page on GitHub</a>
* <a href="https://developer.apple.com/xcode/" target="_blank">xCode</a><small class="grey"> - Apple's IDE for developing (among other things) iOS apps</small>
* <a href="http://makeappicon.com/" target="_blank">makeappicon.com</a><small class="grey"> - service to create app icon images in different required sizes</small>
* <a href="https://www.youtube.com/watch?v=rRlOdp4uZoo" target="_blank">How to submit an app to Apple's app store</a><small class="grey"> - video explaining all necessary steps</small>
* <a href="http://blog.ludei.com/webgl-ios-8-safari-webview/" target="_blank">WebGL on iOS 8 Safari and WebViews</a><small class="grey"> - article showcasing WebGL capabilities to be introduced by iOS 8</small>
