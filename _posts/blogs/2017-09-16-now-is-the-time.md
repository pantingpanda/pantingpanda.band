---
title: CSS Art
date: 2017-09-16 00:00:00 Z
categories:
- blogs
background: "#fff"
comments: 'true'
layout: blog-post
thumbnail: "spaceship.png"
---

---
title: CSS ART == SEMANTICS
categories:
- blogs
background: "#fff"
comments: 'true'
layout: blog-post
---

![spaceship css art image](/img/spaceship.png)

My first encounter with css art was through ***codepen*** and the ***css-tricks*** website.
I was initially drawn to it as anyone else would be — for the visuals. However, working on many css illustrations, I began to acquire essential skills for writing maintainable code.

I observed that the organisation of my code significantly improved as I was forced learn ways to maintain the illustrations, and implement easy methods for making changes. And above all else, I began to write [semantically](https://boagworld.com/dev/semantic-code-what-why-how/).   

**Here are a few essential topics I learnt in through creating css art**:

## Re-usable code through CSS custom properties

CSS custom properties or as CSS variables as it is commonly referred to as, is a fairly new addition to CSS. CSS custom properties allows you to store multiple values in the `:root` to retrieve in any point in the document.

In this manner, snippets of code can be saved and called for tasks such as media queries or simply to store values. In my recent project of a spaceship, I create css variables for each element of the space ship and called it in the appropriate places. As I was unsure of the color-scheme, I started with gray-scale and was able to change all the colours in one place, and without having to scroll through the entire document.

CSS variables save time!

#### Example of CSS Custom Properties
> [from my spaceship project](https://codepen.io/mentezz/pen/oRymgg?editors=0110)

````
:root {
  --background: #1B2B40;
  --booster-blue: #3D7099;
  --medium-blue: #2B88D9;

  --spaceship-width: 100px;
  --spaceship-height: 300px;
  --spaceship-background: #1580D6;

  --window: 50px;
  --window-shadow-inset: rgba(0,0,0,.25);
  --window-shadow: rgba(0,0,0,0.1);
  --window-border: rgba(0,0,0,0.6);
  --window-blue: #99D9F2;

  --bottom-paint: #00FFE9;

  --fire: #FF1109;
  --fire-border: orange;
}
````

## ***calc()*** function in css
The *calc* function was something I stumbled upon when I was thinking of new methods to centre elements with css. Before, I used a long down method to centre an element vertically and horizontally. This usually took between  6 - 7 lines every time I needed to centre an item.

It looked something like this:

````
div {
  position: absolute;
  display:block
  width: 500px;
  height: 500px;
  left: 50%;
  top: 50%;
  margin-left: 250px;
  margin-top: 250px;
}
````

However calc function significantly minimises the amount of code for such tasks. For example, the above code can be written in just two lines in combination with css variables.

#### Example:

````
div {
  position: absolute;
  display:block
  width: var(--div-width);
  height: var(--div-height);
  left: calc(50% - var(--div-width));
  top: calc(50% - var(--div-height));
}
````

With a little practice, calc() can help you easily position elements based various different conditions with the arithmetic operators it provides.

## A use case for ***CSS Animations***

![alien and the moon image](/img/alien.gif)

In the CSS art community, animations are an often used to add flourished to the programmer's illustrations. Although, CSS animations are in many ways inferior to robust javascript animation API's such as GSAP, they do prove to be a useful alternative.

CSS animations are easily to code and takes up less space. Therefore, if a website only requires minimal animation for functionality, it could easily implement CSS animations instead of copying in an entire library like GSAP.

## Relative Units and Responsive Dsesign

One of the most crucial skills you can gain by making css illustrations is a strong grasp of responsive design. Across the board, designers and developers user various tools such as media-queries, flex-box, and css-grid.

One of the simplest and most effect ways to make something responsive is to use 'relative units'. In CSS relative units are defined by the device width of the user, or the 'viewport'. Therefore, your design can adapt based on the size of the user's screen.

#### Here's a demonstration:
w
![link](/assets/img/panda.gif)

Notice how all the components of the panda's face adapt to the screen size? This is the strength of relative units!

There are a handful of relative units, in this case, I used the ```vw``` (viewport-width) and ```vh``` (viewport-height) units to defined the width and height of the components that made up the illustration.

Learning how to make resizable components is advantageous, and can be applied to many of the popular front-end frameworks (for example when creating templated in Vue).
remarkably unique voice, and a perfect guitar tone!
