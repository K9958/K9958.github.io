---
title: Basics of Game Programming
categories:
  - portfolio
tags:
  - Gamedev
  - Unity
  - C#
gallery1:
  - url: /assets/bgpimages/Picture1.png
    image_path: /assets/bgpimages/Picture1.png
    alt: "Picture1"
    title: "Picture1"
  - url: /assets/bgpimages/Picture4.png
    image_path: /assets/bgpimages/Picture4.png
    alt: "Picture4"
    title: "Picture4"
gallery2:
  - url: /assets/bgpimages/Picture2.png
    image_path: /assets/bgpimages/Picture2.png
    alt: "Picture2"
    title: "Picture2"
gallery3:
  - url: /assets/bgpimages/Picture3.png
    image_path: /assets/bgpimages/Picture3.png
    alt: "Picture3"
    title: "Picture3"
gallery5:
  - url: /assets/bgpimages/Picture5.png
    image_path: /assets/bgpimages/Picture5.png
    alt: "Picture5"
    title: "Picture5"
gallery6:
  - url: /assets/bgpimages/Picture6.png
    image_path: /assets/bgpimages/Picture6.png
    alt: "Picture6"
    title: "Picture6"
gallery7:
  - url: /assets/bgpimages/Picture7.png
    image_path: /assets/bgpimages/Picture7.png
    alt: "Picture7"
    title: "Picture7"
gallery8:
  - url: /assets/bgpimages/Picture8.png
    image_path: /assets/bgpimages/Picture8.png
    alt: "Picture8"
    title: "Picture8"
---

During the course of Basics of Game Programming I managed to grasp a lot of different concepts of Game Programming and Development. Here's a brief list of what I used and learned:

-	Creating menus and panels with animations
-	Animating characters with ready-made animations from Adobe Mixamo. Edit-ing animations with UMotion (from Unity Asset Store)
-	Using animation events with animations
-	Using ready-made prefabs and using them via scripts
-	Using ready-made sounds and music, and managing them via scripts
-	Using different Unity Packages such as Cinemachine, Input System, Mecanim, Particle Pack
-	Using Navigation mesh and Navigation mesh agents
-	Different functionalities such as:
    - player movement and jump
    - item pickup and inventory system
    - Creating and managing a GUI (item hotbar, health)
    - most of gun functionalities
    - using items and weapons
    - Zombie AI
    - Health, damage and death
    - Enemy Spawner with states

## Images with captions

There is images to visualize the different functionalities that I coded. The game shown is a prototype project game that can be downloaded from here: [Saving Steve](https://kantola.eu/files/savingsteve.zip)

### Hotbar and GUI

{% include gallery id="gallery1" %}

I coded a hotbar system that can take consumable items and weapons such as bullets and stores them on separate inventories. Bullets will be visualized on different slots than weapons. Active weapons will show their current magazine bullet count.

The GUI holds also players health icon. The heart icon color will be set darker and smaller with damage. There is also a skeleton image that will be shown gradually over the players avatar image.

### Main Menu

{% include gallery id="gallery2" %}

![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture2.png)

I animated a main menu with characters. Character animations are from Adobe Mixamo. The campfire light is also animated.

### Game intro

{% include gallery id="gallery3" class="full" %}

![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture3.png)

I created an intro animation with animated text on a black screen.

## Player states and Enemy AI

![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture5.png)

Player has two main animation states. First when player is not holding a weapon and second when player is holding a weapon. Im non-wield mode Player will be rotated towards his movement. In wielding mode the player is always rotated towards the mouse, where player is pointing his weapon at.

![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture6.png)

Enemies will wander player is far enough. If the player comes in range, the enemies start to run towards the player. When they reach attacking distance, the enemies will start attacking the player. If the player outruns and goes far enough the enemies, they stop pursuing the player.

Note in the image the player HUD change with damage.

## Other screenshots of the prototype

### Unity editor view
![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture7.png)

![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture8.png)
![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture9.png)
![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture10.png)
![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture11.png)
![alt]({{ site.url }}{{ site.baseurl }}/assets/bgpimages/Picture12.png)