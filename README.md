# Rock, Paper, and Scissors Game! 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Clocks are useful element for any UI if used in a proper way. Clocks can be used in sites where time is the main concern like some booking sites or some app showing arriving times of train, buses, flights, etc. Clock is basically of two types, Analog and Digital. We will be looking at making a digital one.

I went to geeksforgeeks.org and followed their [Digital Clock project](https://www.geeksforgeeks.org/how-to-design-digital-clock-using-javascript/).

### Screenshot

![Digital Clock](https://github.com/mlee99/digital-clock/blob/main/assets/animated-clock.png)

### Links

- Solution URL: [Digital Clock solution](https://github.com/mlee99/digital-clock)

## My process

Estalished a "showtime" function to get the basic set up of the clock. HTML was fairly simple using the statdard hour:minute:second template. Grabbed the specific class to manipulate its innter text (I believe I used innterHTML, but it worked the same). If the hour was greater than 12, then the time would display "PM", less than 12 it displated "AM." Another function was placed in front of the conditional statements to further manipulate the specific time values so that it displayed a "0" in front of its value if it was less than 10.

### Built with

- Semantic HTML5 markup
- CSS/Sass
- JS (ES6 notation used)

### What I learned

Compared to the rock, papper, scissors game, this was fairly trivial. I did learn about different object, such as the Date() and SetInterval() objects. I also learned how to import fonts within Sass.

### Continued development

3/15 for newbie project! This is my second project including Javascript, and I'm appreciating the practice. I'm still refering to the document in case I get stuck, so as I continue I'm going to focus on trying more methods that I learned to understand and attempt to debug my code to ensure it works. I'm not too worried about getting the project right the first time, but I do want to take off the training wheels eventually.

### Useful resources

- [W3 Schools](https://www.w3schools.com/) ; Used for references.

- [MDN Web Docs Website](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) ; Referenced to learn about the "Date()" object, along with the "SetInteral()" object.

- [Geeks for Geeks](https://www.geeksforgeeks.org/) ; An alternative place to find projects that are similar to the ones in the premium section on CodeAcademy.

## Author

- Frontend Mentor - [@mlee99](https://www.frontendmentor.io/profile/mlee99)

## Acknowledgments

Thank you to CodeAcademy, and Youtube!
