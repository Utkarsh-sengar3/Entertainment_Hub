document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && issue && message) {
        // Display success message
        alert('Submitted successfully! Thank you for your message, ' + name + '. We will address your issue related to ' + issue + '.');
        
        // Optionally, you can clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});