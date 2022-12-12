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
    alt: "View of the GUI"
    title: "View of the GUI"
  - url: /assets/bgpimages/Picture4.png
    image_path: /assets/bgpimages/Picture4.png
    alt: "Start of the game"
    title: "Start of the game. Player is in noncombat-mode"
gallery2:
  - url: /assets/bgpimages/Picture2.png
    image_path: /assets/bgpimages/Picture2.png
    alt: "Main Menu Scene"
    title: "Main Menu Scene"
gallery3:
  - url: /assets/bgpimages/Picture3.png
    image_path: /assets/bgpimages/Picture3.png
    alt: "Intro screen"
    title: "Intro screen"
gallery5:
  - url: /assets/bgpimages/Picture5.png
    image_path: /assets/bgpimages/Picture5.png
    alt: "Player aiming a gun at zombie"
    title: "Player aiming a gun at zombie"
  - url: /assets/bgpimages/Picture6.png
    image_path: /assets/bgpimages/Picture6.png
    alt: "Zombie Action!"
    title: "Zombie Action!"
gallery6:
  - url: /assets/bgpimages/Picture7.png
    image_path: /assets/bgpimages/Picture7.png
    alt: "Image of the Unity Editor"
    title: "Image of the Unity Editor"
  - url: /assets/bgpimages/Picture8.png
    image_path: /assets/bgpimages/Picture8.png
    alt: "Image of the Unity Hierarchy window"
    title: "Image of the Unity Hierarchy window"
  - url: /assets/bgpimages/Picture9.png
    image_path: /assets/bgpimages/Picture9.png
    alt: "Picture of Player Inspector view"
    title: "Picture of Player Inspector view"
  - url: /assets/bgpimages/Picture10.png
    image_path: /assets/bgpimages/Picture10.png
    alt: "Picture of Zombie Inspector view"
    title: "Picture of Zombie Inspector view"
  - url: /assets/bgpimages/Picture11.png
    image_path: /assets/bgpimages/Picture11.png
    alt: "Image of the level. Designed by Juha-Matti Hietala."
    title: "Image of the level. Designed by Juha-Matti Hietala."
gallery7:
  - url: /assets/bgpimages/Picture12.png
    image_path: /assets/bgpimages/Picture12.png
    alt: "Git Insights"
    title: "Git Insights"
---

During the course of Basics of Game Programming I managed to grasp a lot of different concepts of Game Programming and Development. Here's a brief list of what I used and learned:

- Using many different [Unity API](https://docs.unity3d.com/ScriptReference/) methods
-	Using ready-made prefabs and using them via scripts
-	Using ready-made sounds and music, and managing them via scripts
-	Using different Unity Packages such as Cinemachine, [Input System](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.4/manual/QuickStartGuide.html), Mecanim and Animation Rigging, [Particle Pack](https://assetstore.unity.com/packages/essentials/asset-packs/unity-particle-pack-5-x-73777)
-	Using [Navigation mesh](https://docs.unity3d.com/Manual/Navigation.html) and Navigation mesh agents
-	Creating menus and panels with animations
-	Animating characters with ready-made animations from Adobe Mixamo. Editing animations with [UMotion](https://assetstore.unity.com/packages/tools/animation/umotion-pro-animation-editor-95991)
-	Using animation events with animations
- [Inverse Kinematics](https://docs.unity3d.com/Manual/InverseKinematics.html) to constrain animations
-	Coding different functionalities such as:
    - player movement and jump
    - item pickup and inventory system
    - Creating and managing a GUI (item hotbar, health)
    - most of gun functionalities
    - using items and weapons
    - Zombie AI
    - Health, damage and death
    - Enemy Spawner with states

## Game Prototype images with captions

There is images to visualize the different functionalities that I coded. The game shown is a prototype project game that can be downloaded from here: [Saving Steve](https://kantola.eu/files/savingsteve.zip)

### Hotbar and GUI

{% include gallery id="gallery1" layout="full" %}

I coded a hotbar system that can take consumable items and weapons such as bullets and stores them on separate inventories. Bullets will be visualized on different slots than weapons. Active weapons will show their current magazine bullet count.

The GUI holds also players health icon. The heart icon color will be set darker and smaller with damage. There is also a skeleton image that will be shown gradually over the players avatar image.

### Main Menu

{% include gallery id="gallery2" class="full" %}

I animated a main menu with characters. Character animations are from Adobe Mixamo. The campfire light is also animated.

### Game intro

{% include gallery id="gallery3" class="full" %}

I created an intro animation with animated text on a black screen.

## Player states and Enemy AI

{% include gallery id="gallery5" class="full" %}

Player has two main animation states. First when player is not holding a weapon and second when player is holding a weapon. Im non-wield mode Player will be rotated towards his movement. In wielding mode the player is always rotated towards the mouse, where player is pointing his weapon at.

Enemies will wander player is far enough. If the player comes in range, the enemies start to run towards the player. When they reach attacking distance, the enemies will start attacking the player. If the player outruns and goes far enough the enemies, they stop pursuing the player.

Note in the image the player HUD change with damage.

## Other screenshots of the prototype

### Unity editor view

{% include gallery id="gallery6" class="full" %}

Here's some images of the development environment.

### Git Insights

{% include gallery id="gallery7" class="full" %}

I coded about 2000 rows and did about 350 commits to the game prototype project :)
