console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	form.addEventListener('submit', () => {
		alert('Form submitted succesfully, we might get around to reading it');
	  });;
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duckie = document.querySelector(".duckie")

duckie.addEventListener('mouseover', () => {
	alert('You look great in that shirt, like Amazing!');
  })