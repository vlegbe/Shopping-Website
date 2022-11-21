import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const main = document.querySelector('.main')
main.classList.add('EventInput')

function createEvent({name, description, image, date, price }) {
    //Event Info Container
     const card = document.createElement('div')
     card.classList.add('card')

     const imageSection = document.createElement('div')
    imageSection.classList = "imageContainer"

     const eventName = document.createElement('h2')
     card.classList.add('card-title')

     //Upper Part
     const img = document.createElement('img')
     img.classList = "image"
     img.src = image
     imageSection.appendChild(img)


    //Bottom Part
    const infoSection = document.createElement('infoSection')
    infoSection.classList = "infoContainer"


     eventName.append(name)
     eventName.innerText = Events[eventNum].name
     eventDescription.innerText

const sliderContainer = document.createElement('div')
sliderContainer.classList.add('sliders')
}