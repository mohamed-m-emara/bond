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


  // Get the elements
// Get the elements
var input = document.querySelector('.search-form input');
var cards = document.querySelectorAll('.profile-card');

// Add an event listener for the input field
input.addEventListener('keyup', function (event) {
  // Get the search query
  var query = event.target.value.toLowerCase();

  // Loop through all the profile cards
  cards.forEach(function (card) {
    var organization = card.querySelector('a').textContent;

    // If the organization includes the search query, show it, otherwise hide it
    if (organization.toLowerCase().includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
      
    }
  });
});

