const images = [
    "0.jpeg",
    "1.webp",
    "2.jpeg",
    "3.webp",
    "4.jpeg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.className="background";
bgImage.src=`img/${chosenImage}`;

// console.log(bgImage);
// document.body.appendChild(bgImage);
document.body.append(bgImage);
// prepend put some element to the top of the contents.