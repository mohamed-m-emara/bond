// JavaScript to toggle the dropdown
document.getElementById('notification-icon').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('notification-dropdown').classList.toggle('show');
    event.stopPropagation(); // Prevent the click from propagating
});

document.getElementById('profile-icon').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('profile-dropdown').classList.toggle('show');
    event.stopPropagation(); // Prevent the click from propagating
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#notification-icon') && !event.target.matches('#profile-icon')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

window.onload = function () {
    var acceptButtons = document.getElementsByClassName('accept-button');
    var rejectButtons = document.getElementsByClassName('reject-button');

    for (var i = 0; i < acceptButtons.length; i++) {
        acceptButtons[i].addEventListener('click', function (event) {
            var card = event.currentTarget.closest('.profile-card');
            card.remove(); // This will remove the card from the page
        });
    }

    for (var i = 0; i < rejectButtons.length; i++) {
        rejectButtons[i].addEventListener('click', function (event) {
            var card = event.currentTarget.closest('.profile-card');
            card.remove(); // This will remove the card from the page
        });
    }
}