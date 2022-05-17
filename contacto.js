
 const contactButton = document.getElementById('contact')

 contactButton.addEventListener('click', () => {
    const contactForm = document.getElementById('cardContact')
    contactForm.classList.toggle('d-none')
})