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

  document.querySelectorAll('.update-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        switch(index) {
            case 0:
                window.location.href = 'donationPost.html';
                break;
            case 1:
                window.location.href = 'donationPost.html';
                break;
            // Add more cases as needed...
        }
    });
});

document.querySelectorAll('.delete-button').forEach(button => {
  button.addEventListener('click', () => {
      button.parentElement.remove();
  });
});

document.querySelector('.submit-button').addEventListener('click', function(event) {
  event.preventDefault();  // Prevent the form from being submitted
  alert('Your response has been recorded.');  // Display the message
});


