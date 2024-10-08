// Start of the Contact Form

// Function to validate form inputs
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const description = document.getElementById('description').value.trim();

  // Check if all fields are filled
  if (!name || !address || !email || !company || !subject || !description) {
    alert("All fields must be filled out.");
    return false;
  }

  // Name validation: must contain at least 3 characters
  if (name.length < 3) {
    alert("Name must contain at least 3 characters.");
    return false;
  }

  // Email validation: must contain valid email with at least 2 characters after '@'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If all validations pass, return the form data
  return { name, address, email, company, subject, description };

}

// Function to send data to WhatsApp
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = validateForm();
    if (!formData) return; // Stop the process if validation fails

    const whatsappMessage = `Name: ${formData.name}%0AAddress: ${formData.address}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0ASubject: ${formData.subject}%0ADescription: ${formData.description}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+918129298229&text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Function to send data to Email
function sendToEmail(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = validateForm();
    if (!formData) return; // Stop the process if validation fails

    const mailtoLink = `mailto:mh013762@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0AAddress: ${encodeURIComponent(formData.address)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACompany: ${encodeURIComponent(formData.company)}%0ADescription: ${encodeURIComponent(formData.description)}`;

    window.open(mailtoLink, '_blank');
  }
  
//   End of the Contact Form
/* ------------------------------------------------------------------------- */


/* ------------------------------------------------------------------------- */
// Start of the Back to Top Button 

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

// Smooth scroll to the top of the document when the button is clicked
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}
// End of the Back to Top Button
/* ------------------------------------------------------------------------- */
