function handleSubmit(evt) {
	evt.preventDefault();
	
	form.addEventListener('submit', () => {
		alert('Thanks for the message, we now have access to your sensitive files');
	  });;
    }

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

