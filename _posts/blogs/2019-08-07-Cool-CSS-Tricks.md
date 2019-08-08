---
title: Useful CSS Tricks
categories: blogs
layout: blog-post
thumbnail: "css-tricks.jpg"
background: "#fff"
comments: 'true'
---

#### Caret Color
Carets are the vertical blinking lines you see when you click on an html input or text area. 
This can be styled used the ‘caret-color’ attribute in css. 

Check out this example here: [caret color codepen](https://codepen.io/moniet/pen/voRbwJ?editors=0100)

`
:root {
  --bg: #badfdb;
  --caret: #ff8a5c;
  --input-bg: #fcf9ea;
}

input {
  border: solid 5px #49beb7;
  padding: 1em;
  width: 50vw;
  background: var(--input-bg);
  caret-color: var(--caret);
  color: var(--caret);
  font-weight: bold;
  font-size: 1.5em;
}
`

#### Styling Bullet Points

Bullet points can be styled with the ::marker attribute after the classname. 
A super useful new feature in the Chrome and Firefox is that you can now see the '::marker' pseudo element in the inspector. 

Here’s an example of bullet points: [codepen](https://codepen.io/moniet/pen/jgzope?editors=0110)


#### Text Rendering 
CSS3 allows us to change how text is rendered. This can help make our text more readable and accessible.
There are a few attributes in the text-rendering attribute that give you many tradeoffs such as `optimizeSpeed`, `optimizeLegibility`, and `optimizePrecision`.
The most useful of these is the `optimizeLegibility` attribute that enables us enable ligatures and kerning. 

Kerning in text is in the simplest form the space between the letters. We can adjust with the kerning attribute in css. 

![alt text](https://1percent.files.wordpress.com/2007/01/kerning.gif)


