---
layout: blog-post
title:  "Creating an Interactive Menu with SVG"
date:   2019-07-07 13:29:19 +0100
categories: blogs
background: "#fff"
comments: 'true'
---
# Creating an Interactive Menu with SVG

Responsive technologies in web development are probably one of the most important aspects of web development today. In an effort to explore the topic a little more, I decided to create an interactive menu using SVG that would concisely hide and show links.

#### Why SVG?

SVG is a great format for creating graphics online as it can scale with the screen without [aliasing](). This means that as developers we do not need to load new images for different responsive break points as you would need to do with other image formats such as png, jpeg, etc.

Moreover, SVG has great [browser support](). Even opera supports it!

So with that out of the way, let's get started (you use [this](https://codepen.io/mentezz/pen/LKgWQw) as a reference):

## How to build an interactive menu?

#### Step 1: Designing the SVG

Before we do anything, we need the actual SVG to be designed! For this, I used ***Affinity Designer***, however, there are many tools available such as *Inkscape*, *Illustrator*, *Sketch*, etc.

In the design, I first created the menu button, and then the hamburger menu icon with the button. I then hid the hamburger icon and created a 'close menu' icon in a new layer.

A tip when designing the SVG in any software is to label the layers appropriately, and group related layers. This will become evident as we start animating the elements.

Here's an example of how I labeled the layers in my project:

![affinity designer screengrab](../assets/img/ad_menu_layers.png)

#### Step 2: Exporting

The method I use to export the SVG is to show everything on the screen. Fair warning, it will look ugly. But that's okay, because we will hide the conflicting elements with css and javascript.

Here's an example of my export:

![exporting svg image](../assets/img/svg_menu_export.png)

#### Step 3: Cleaning Up
Once the SVG is exported, we need the 'clean' the markup.
This helps us by firstly, optimising the file by chopping down on the various SVG elements within the markup (and also some bezier points).

Secondly, it makes the SVG significantly more readable, which in turn makes the process of finding and editing the elements easier.

To cleanup the file, I use a tool called 'SVGO' which is available as an online tool and CLI formats. For this example I will be using the [SVGO website](https://jakearchibald.github.io/svgomg/).

All you need to do is paste your markup in the input field, and it will automatically optimise the file. You will then see a page with an image of your SVG where you can copy the markup.

**My svg file was cut down from 1.07k to 788 bytes:**
![svgo website screengrab](../assets/img/svgo_int_menu.png)


#### STEP 4: Hiding elements

Once the SVG has been optimised, it can be copied into an html file.

To find the elements, I used the inspect tool in Firefox. Here's an example:

![inspecting svg in firefox browser](../assets/img/firefox_svg_inspect.png)

On inspecting each element, it's a good idea to label each relative element inside the SVG with an id or class. For this reason, I mentioned above that it is important to label the layers appropriately when working in your graphic design software of choice.

This way, it will be easier to traverse the SVG code and find what you're looking for, as the software will automatically label the elements, and save you some work in the process.

Although the software sometimes add their own ids, it's still a good idea to customize it to make sure it has more relevance to the code you're writing.

Once the elements have been labeled with id's or classes, there are two options:

1. hide the elements with css
2. hide the element with SVG attributes

In my example I chose to hide then with the latter option.

#### Step 5: Animating

In my project I used a library called GSAP for animations. They have an incredible suite of animation tools; I could not recommend it enough. More specifically, I use GSAP's **TweenLite** plugin.

Now that we've labeled and 'beautified' our SVG file, we can select the elements with ease in our scripts and animate them.

Animating in TweenLite is very simple, it requires an element object, the duration of the animation, and properties of that element to animate.

**Here's an example:**
1. providing the hamburger button
2. providing the duration (0.5 seconds)
3. proving the properties to move the object -20 on the y-axis and changing it's opacity to 0.

```
const hamburgerBtn = document.querySelector('#hamburger_btn');
TweenLite.to(hamburgerBtn, 0.5, { y: -20, opacity: 0 });
```

In a similar manner, I animated the other elements and moved them about their x and y axes. Another change I made was to move the icons closer to the menu button. I did this by hard-coding a 'transform' attribute in the SVG elements of the icons.

I suggest studying the code to understand how things are animated with GSAP.

Viola! We now have a completed menu animation!

I hope to create more projects like this and delve in deeper by creating complex animations and breaking them down.
