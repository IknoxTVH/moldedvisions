// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    return true;
}

// Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to open lightbox
function openLightbox(imageId) {
    const image = document.getElementById(imageId);
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
