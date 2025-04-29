document.addEventListener('DOMContentLoaded', () => {
    console.log("Sankalp IT Teaching Hub Portfolio Loaded!");
    
    
    const contactForm = document.querySelector('.contact form');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('Thank you for your message! SANKALP Team will get back to you soon.');
        contactForm.reset();  
    });
});
