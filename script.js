/* Data to Show*/
const data = [
  {
    quote: `We travel not to escape life, but for life not to escape us.`,
    image: `url(assets/map.jpg)`,
    author: `Unknown`
  },
  {
    quote: `A journey of a thousand miles begins with a single step.`,
    image: `url(assets/steps.jpg)`,
    author: `Lao Tzu`
  },
  {
    quote: `Oh the places you'll go.`,
    image: `url(assets/vintagemap.jpg)`,
    author: `Dr. Seuss`
  },
  {
    quote: `Man cannot discover new oceans unless he has the courage to lose sight of the shore.`,
    image: `url(assets/beach.jpg)`,
    author: `Andre Gide`
  },
  {
    quote: `Do not follow where the path may lead. Go instead where there is no path and leave a trail.`,
    image: `url(assets/log.jpg)`,
    author: `Ralph Waldo Emerson`
  },
  {
    quote: `Take only memories, leave only footprints.`,
    image: `url(assets/footprints.jpg)`,
    author: `Chief Seattle`
  },
  {
    quote: `The world is a book and those who do not travel read only one page.`,
    image: `url(assets/airplanewing.jpg)`,
    author: `St. Augustine of Hippo`
  },
  {
    quote: `Not all those who wander are lost.`,
    image: `url(assets/boat.jpg)`,
    author: `J.R.R. Tolkien`
  },
  {
    quote: `To travel is to live.`,
    image: `url(assets/italy.jpg)`,
    author: `Hans Christian Anderson`
  },
  {
    quote: `Life is a journey, not a destination.`,
    image: `url(assets/airballoon.jpg)`,
    author: `Ralph Waldo Emerson`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// background
const bgImage = document.querySelector("body");
// author
const author = document.querySelector("p.author");
// curlymarks
const curlymarka = document.querySelector("img.curlymarkA");
const curlymarkb = document.querySelector("img.curlymarkB");

console.log(curlymarkb);

// Check-Check: change text
quote.innerHTML = "Let's travel the world!";
// Check-Check: background image
bgImage.style.backgroundImage = "url(/assets/globe.gif)";
// Check-Check: change author text
author.innerHTML = "";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
  document.querySelector("img.curlymarkA").src = "assets/curlymarkA.gif";
  document.querySelector("img.curlymarkB").src = "assets/curlymarkB.gif";
  document.querySelector("img.takeoff").src = "";

  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = "― " + data[itemNumber].author;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
  document.querySelector("img.curlymarkA").src = "assets/curlymarkA.gif";
  document.querySelector("img.curlymarkB").src = "assets/curlymarkB.gif";
  document.querySelector("img.takeoff").src = "";

  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  bgImage.style.backgroundImage = data[itemNumber].image;
  author.innerHTML = "― " + data[itemNumber].author;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
  document.querySelector("img.curlymarkA").src = "assets/curlymarkA.gif";
  document.querySelector("img.curlymarkB").src = "assets/curlymarkB.gif";
  document.querySelector("img.takeoff").src = "";

  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  author.innerHTML = "― " + data[randomNumber].author;
  quote.innerHTML = data[randomNumber].quote;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  document.querySelector("img.next").src = "assets/next.svg";
  document.querySelector("img.prev").src = "assets/prev.svg";
  document.querySelector("img.random").src = "assets/random.svg";
  document.querySelector("img.curlymarkA").src = "assets/curlymarkA.gif";
  document.querySelector("img.curlymarkB").src = "assets/curlymarkB.gif";
  document.querySelector("img.takeoff").src = "";

  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    author.innerHTML = "― " + data[itemNumber].author;
    quote.innerHTML = data[itemNumber].quote;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    bgImage.style.backgroundImage = data[itemNumber].image;
    author.innerHTML = "― " + data[itemNumber].author;
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    bgImage.style.backgroundImage = data[randomNumber].image;
    author.innerHTML = "― " + data[randomNumber].author;
  }
});
