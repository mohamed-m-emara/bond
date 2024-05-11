// Select all the "Scheduled Pickup" buttons
var buttons = document.querySelectorAll('.schedule-button');

// Add an event listener to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        window.location.href = 'organizationSchedulePickup.html';  // Replace 'your-file.html' with the path to your HTML file
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    window.location.href = 'organizationPickupSuccessful.html'; // Redirect to anotherPage.html
});