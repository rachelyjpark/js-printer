// var stripes = ["div div div div div div div div div div div div div div div div div div div div div div div div div div div div div div"];
// var stripes = document.querySelectorAll("div.stripes");

// for (i=0, i < stripes.length, i++) {
//   stripes[i].style.color = "blue";
// }


var angle = 0

var changeBackground = function() {
  angle = angle + 1 

  document.body.style.backgroundImage = "linear-gradient(" + angle + "deg, #007251, #003721"
  // document.body.style.backgroundImage = "url('poker.jpeg')";
  // document.body.style.backgroundSize =  "cover";
  // document.body.style.backgroundRepeat =  "no-repeat";
  requestAnimationFrame(changeBackground)
}

changeBackground()

const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth  * 2
canvasTag.height = window.innerHeight * 2


canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

let aimX = null
let aimY = null
let currentX = null
let currentY = null


// const image = document.createElement("img")
// image.src = "image1.jpg"



let i = 0 
const images = [
  "image1.png", 
  "image2.jpg", 
  "image3.jpg", 
  "image4.png", 
  "image5.png", 
  "image6.png", 
  "image7.png", 
  "image8.png", 
  "image9.png", 
  "image10.png",
  "image11.png",
  "image12.png",
  "image13.png"].map(src => {
  const image = document.createElement("img")
  image.src = src 
  return image
})

const shuffledImages = images.sort((a, b) => 0.5 - Math.random());


document.addEventListener("mousemove", function (event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null) {
    currentX = event.pageX
    currentY = event.pageY
  }
  //  if (images[i].complete) {
  //   context.drawImage(images[i], event.pageX - 200, event.pageY - 300, 2000, 100)
  //  }
})

canvasTag.addEventListener("click", function () {
  i = i + 1
  if (i >= images.length) {
    i = 0 
  }
})


const draw = function () {
  if (currentX) {
      if (images[i].complete) {
    context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600)
   }

   currentX = currentX + (aimX - currentX) * 0.1
   currentY = currentY + (aimY - currentY) * 0.1
  }

  requestAnimationFrame(draw)
}

draw()

