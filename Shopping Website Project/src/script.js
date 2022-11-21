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

//Create Events Object

const cats = [
    {
        name: "Bags",
        description: "Shop the best bags in fashion now!",
        
    },
    {
        name: "Shoes",
        description:"From trainers to heels, we've got all the stylish shoes you'll need!",
      

    },
    {
        name: "Clothing",
        description:"Shop all the latest fashion right here!"
    },
    
    {
        name: "Accessories",
        description:"Whether its a cute bracelet or a stunning ring, we've got it all here for you!"

    },

]

//Skeleton for Card




function createSlider(slider) {
    return `
        <div class="single-slider">
            <input type="range" min="1" max="100" value="50" class="${slider}">
                <label> ${slider} </label>
        </div>
    `    
}

["bags", "shoes", "clothing", "accessories"].forEach(info => sliderContainer.innerHTML += createSlider(info))

const sortingButton = document.createElement('button')
sortingButton.append('Go to...')
sliderContainer.append(sortingButton)
card.append(eventName, img, sliderContainer)

main.append(card)
}

events.forEach(event => createEvent(event))

document.addGlobalEventListener('click', (e) => {
    if(e.target.matches('button')) {
        const card = e.target.closest('.card')
        const inputs = card.querySelectorAll('input')

        let chosenIndex = Math.round(Math.random()*3)
        let maxElement = inputs[chosenIndex].value

        for (let index = 0; index < inputs.length; index++) {
            const newMaxElement = inputs[index].value
            if (maxElement < newMaxElement) {
                maxElement = newMaxElement
                chosenIndex = index
            }
        }

        if (card.classList.length > 1) {
            card.classList.replace(card.classList[1], inputs[chosenIndex].className)
        } else {
            card.classList.toggle(inputs[chosenIndex].className)
        }
    }
})



//Creates a loop for all fields

for (let i = 0; i < 5; i++) {
    const infoPartSection = document.createElement('div')
    infoPartSection.classList = "infoPartSection"
    const arr = [name, description, date, price]

    infoPartSection.append(arr[i])

    infoSection.append(infoPartSection)

}

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

