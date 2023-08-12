document.addEventListener("DOMContentLoaded", function(event) {
    const sliderImages = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;
  
    function changeImage() {
      sliderImages[currentImageIndex].style.display = 'none';
  
      currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  
      sliderImages[currentImageIndex].style.display = 'block';
    }
  
    setInterval(changeImage, 2000);
  });






function validateForm() {
    var nameInput = document.querySelector('.contact__input[name="name"]');
    var emailInput = document.querySelector('.contact__input[name="email"]');
    var messageInput = document.querySelector('.contact__input[name="message"]');
    
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return false;
    }

    // Basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true; // Allow form submission
}



