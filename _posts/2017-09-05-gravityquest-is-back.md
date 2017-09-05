---
layout: post
title: Gravity Quest is back!
slug: gravityquest-is-back
date: 2017-09-05 12:00:00 -0300
categories: gravityquest
tags:
- gravityquest
---

Around 3 years ago, I published Gravity Quest to the iOS store. I developed the game during the summer of 2014 after finishing my PhD and starting my new job in industry. Developing Gravity Quest was challenging and fun. I [learned about the Phaser game framework]({% post_url 2014-08-27-gravityquest-intro %}), [implemented custom collision detection]({% post_url 2014-08-29-gravityquest-collision %}), [spent hours fiddling with the game's pixel art]({% post_url 2014-09-02-gravityquest-visuals %}), [crowd-sourced the creation of levels for the game]({% post_url 2014-09-06-gravityquest-levels %}), and wrote the just linked blog posts ([and]({% post_url 2014-08-28-gravityquest-gameplay %}) [others]({% post_url 2014-09-11-gravityquest-distribution %})) about the process.

{% include image name="gravityquest-logo.png" caption="Gravity Quest" %}

I originally sold Gravity Quest for $0.99, but quickly found that I could not make any money this way and rather risked deterring potential users. So I dropped the price all-together after a few months, and Gravity Quest was overall downloaded a few thousand times. However, I eventually lost interest in further developing or promoting the game. When in 2016 it was time to once more renew my (paid) Apple developer account, I decided against it, and the game vanished from the iOS store.

I still kept a copy of the game on my phone, though. And when I recently, rather by accident, opened it, I found that the controls and sound had stopped working. This annoyance and the time since I last worked on the game motivated me to fix things.

So I dug up the source code and starting working again on Gravity Quest. Mostly, I updated Phaser (from version 2.0.7 to version 2.8.0), which fixed the control and sound issues. I also refactored the code to make (some) use of modern ES6 features, I set up a new [webpack](https://github.com/webpack/webpack)-based build process, and fixed some minor issues. I tried to ensure backwards-compatibility, even if it meant having to keep [some awkward variable names](https://github.com/ErikWittern/gravityquest/blob/master/src/utils.js#L8).

In effect, Gravity Quest version 1.2.0 emerged. And as of yesterday, it is [available in the iOS store](https://itunes.apple.com/us/app/gravity-quest/id896763991?mt=8&ign-mpt=uo%3D4).

I also made the full source code of the game available [in this repository](https://github.com/ErikWittern/gravityquest). The code is a bit of a mess - but I think source code of games easily is.

I am happy to receive feedback on the game or its code via [Twitter](https://www.twitter.com/erikwittern).