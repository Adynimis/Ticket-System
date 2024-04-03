// JavaScript Document
const submitBtn = document.getElementsByName('submit');


//Create submit event listener/////////////////////////////////////////
submitBtn.addEventListener('submit', function(event){
	//Prevent default submission
	event.preventDefault();
	
	//Get form data
	const formData = {
		username: document.getElementById('email').value,
		password: document.getElementById('password').value
	};
	
	//Check data vrs login credentials
	
}