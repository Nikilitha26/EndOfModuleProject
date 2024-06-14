document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let formData = {
        firstName: document.getElementById('firstNameInput').value,
       
    };

    console.log('Form submitted!', formData);
   

    
    this.reset(); 
    alert('Thank you for your message!');
});
