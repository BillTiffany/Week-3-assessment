function handleSubmit(evt) {
	evt.preventDefault();
	
	form.addEventListener('submit', () => {
		alert('Thanks for the message, we now have access to your sensitive files');
	  });;
    }

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let newRest = document.querySelector(".restform")

const array = ["Uncle Moe's Family Feedbag", "The Frying Dutchman", 
"Up, Up and Buffet", "Wall E Weasels", "Two Guys From Kabul", 
"Pretzel Wagon", "Planet Hype", "Greaser's Cafe", "You Thai Now", 
"Municipal House of Pancakes","Malaria Zone","Leaning Tower of Pizza", 
"Le Krusty Burger", "Spruce Caboose"];

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    
    const simps = document.createElement('h3')
    simps.innerText = randomIndex
    let section = document.querySelector(".restBtn")
    section.appendChild(simps)
}

const asdf = document.querySelector('.restaraunt')
asdf.addEventListener('click', getRandomItem)

const result = getRandomItem(array);
console.log(result);

document.createElement()