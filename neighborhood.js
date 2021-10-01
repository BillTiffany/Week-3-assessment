function handleSubmit(evt) {
	evt.preventDefault();
	
	form.addEventListener('submit', () => {
		alert('Thanks for the message, we now have access to your sensitive files');
	  });;
    }

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.getElementById("myVid").addEventListener("mouseover", function() {
	this.play();
});

document.getElementById("myVid").addEventListener("mouseleave", function() {
	this.pause();
});