---
title: Introduction to WAI-ARIA Roles
date: 2019-6-25 00:00:00 Z
categories:
- blogs
background: "#fff"
comments: 'true'
layout: blog-post
thumbnail: "html5.png"
---

## Introduction to WAI-ARIA Roles

I'm writing this post as a way to explore the basics of accessibility on the web, and  ultimately to pick up good habits of writing semantically rich markup. Accessibility is a topic I have great interest in and want to have a deep understanding of. By writing this blog, I thought it would be a great idea to bring people along on with me on the journey of learning to write better code.

As [WAI-ARIA]() has extensive documentation and terminology, I hope to spread this topic over a few posts to bring out the essential aspects of the specification. Here we go:

## What's WAI-ARIA?

Web Accessibility Initiative – Accessible Rich Internet Applications (WAI-ARIA) is a HTML5 specification that was created by the [W3]() to make the web accessible to those who are differently-abled. The spec provides ways to author markup that can be processed by 'assistive technologies' such as voiceovers, and alternative alternate input technologies such as 'sip and puff', and on-screen keyboards. It especially helps making (dynamic content)[] more accessible.

One significant aspect of the specification is that it is built to achieve greater cross platform ability.

## Authoring ARIA Roles

Web assistive technologies, as mentioned above, rely heavily on the developers to author roles of different components to make the web accessibility. Therefore, it is our responsibility to clearly define different aspects of the website through our markup.

## Landmark Roles

One of the broader roles, is called 'landmark' roles. These define 'chunks' or large sections of the website. The following are examples of landmark roles:

* banner
    * the title within a section, or the section that contains the main title of the website
* main
    * defines where the majority of the content is on the page
* navigation
    * links that allow the user to navigate your website
* search
    * the search box on your website

These roles helps assistive technologies quickly find important sections of the website. For example, if a blind person were to use a news channel, they could get the headlines quickly by traversing to the 'main' section of the page.

#### Visualisation of Landmarks 
![Visualisation of landmarks](/assets/img/main_landmark.png)
![Visualisation of landmarks](/assets/img/search_landmark.png)

In the above image, I utlized an extension on mozilla called landmarks. This extension highlights the different 'roles' that are on the website. This can give us a good understanding of how it would be used. Image if a voice over were to speak the roles highlighted instead.

#### The code from apples websites looks like this:

```
<nav aria-label="Global Navigation"
data-store-locale="us"
data-store-api="https://secure1.store.apple.com/shop/bag/status"
dir="ltr" id="ac-globalnav"
data-hires="false"
data-analytics-region="global nav"
class="js no-touch"
role="navigation"
data-search-api="/search-services/suggestions/"
data-search-locale="en_US"
lang="en-US"
>

```

Here, we can observe the syntax for how to define aria roles as the following:

```
<div role="main"> … </div>

 <!— all roles are defined in the same manner —!>

<nav role="navigation"> … </nav>
```


## Properties

Properties help give extra meaning to the elements on the web page to assistive technologies.
For example, if a blind person were using a website, the screen reader would be able to inform them about images, and various input elements in a form.

Some basic, and important, properties that are extensively used are the 'aria-labelledby', aria-label, and the aria-describedby attributes that the WAI-ARIA spec provides. These point to other elements which can describe

###### Let's build and html form with aria-labelledby:

```
<h1 id="sign_up_header">SIGN UP</h1>
<form action="" role="form">
  <label for="first_name">First Name</label>
  <input type="text" aria-labelledby="first_name sign_up_header">

  <label for="last_name">Last Name</label>
  <input type="text" aria-labelledby="last_name sign_up_header">

  <input type="submit" aria-label="submit">
</form>
```

This is good, but we can do better. An important aspect of many forms is form validation.
How do we use aria roles to inform users of 'required field?'

`aria-required` is the answer.
By adding this attribute, the screen-reader can alert the user that the field is mandatory.

```
<h1 id="sign_up_header">SIGN UP</h1>
<form action="" role="form">
  <label for="first_name">First Name</label>
  <input type="text" aria-labelledby="first_name sign_up_header" aria-required="true" required>

  <label for="last_name">Last Name</label>
  <input type="text" aria-labelledby="last_name sign_up_header" aria-required="true"  required>

  <input type="submit" aria-label="submit">
</form>

```
## Alternate Text for Images

Alternate text is a big topic of conversation in the web developement community as many companies have gotten in trouble for not implementing accessibility features in their websites, especially in regards to images. Dominos is one of those companies.

Hopefully, after this exercise, I will be able to break down just how easy it is to implement alternate text for images, while revealing good practices.

To begin with, the alternate text is a way for assistive technologies to make sense of images. Without this, screen-readers will often read out the entire link of the image. We do not want that. So the WAI-ARIA framework gives us the 'alt' attribute to apply in images. It is as simple as creating a class, id, etc.

Here's an example:

```
 <img src="./images/earth.jpg"  alt="a picture depicting earth">

```

We can also use the arialabelled-by attribute to provide meaning to the image. This may be a nicer way to include alt text, as it points to dynamically changing data.

Here's an example:

``` 
<p id="earth-desc">A picture depicting earth</p>
 <img src="./images/earth.jpg"  aria-labelledby="earth-desc">
```

#### Empty alt tags

There may be times where you would want to but an empty alt tag. For instance, if a banner uses an image tag for decorative purposes, there is no meaning or reason for it to have a alt description. If the image has an empty alt tag, the screen-reader will simply state that it is an image. However, without the alt tag, as mentioned previously, reader will read out the entire url.

Hopefully, these examples provide some insight into images and alt tags, and just how easy they are to implement. Don't be lazy, be ahead of the game, and implement WAI-ARIA in your web applications.
