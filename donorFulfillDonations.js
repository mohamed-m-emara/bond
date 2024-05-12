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




let quantity = 0;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}