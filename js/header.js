$(document).ready(function () {
  // Function to check if the screen size is less than 1199.98 pixels
  function isScreenSmall() {
    return $(window).width() < 1199.98;
  }

  let isDropdownOpen = false;
  // Handle click events on submenu items for smaller screens
  $('.dropdown-submenu a.dropdown-toggle').on('click', function (e) {
    if (isScreenSmall()) {
      const $submenu = $(this).next('.dropdown-menu');
      const isSubmenuOpen = $submenu.hasClass('show');

      // Close other open submenus except the current one
      $('.dropdown-submenu .dropdown-menu.show').not($submenu).removeClass('show');

      // Open the current submenu if it's not already open
      if (!isSubmenuOpen) {
        $submenu.addClass('show');
        isDropdownOpen = true;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });

  // Handle click events on main dropdown items (Merchants, Resources, Company) for smaller screens
  // and directly open the link for larger screens
  $('.nav-item.dropdown').on('click', function (e) {
    const $parentDropdown = $(this);

    if (isScreenSmall()) {
      const $dropdownMenu = $(this).find('.dropdown-menu');

      if (!isDropdownOpen) {
        // Open the dropdown menu on the first click
        isDropdownOpen = true;
        $parentDropdown.data('clicked', true);
        if (isDropdownOpen) {
          $('.nav-item.dropdown').not(this).find('.dropdown-menu').removeClass('show');
        }
        e.preventDefault();
        e.stopPropagation();
      } else {
        // Check if the parent dropdown was previously "clicked"
        const parentClicked = $parentDropdown.data('clicked');

        // If the parent dropdown was "clicked," allow the default behavior of the link on the second click
        if (!parentClicked) {
          $parentDropdown.data('clicked', false);
          isDropdownOpen = false;
        } else {
          // Navigate to the link on the second click
          const link = $(this).find('a.dropdown-toggle').attr('href');
          window.location.href = link;
        }
      }
    } else {
      // Larger screens, directly open the link on click
      const link = $parentDropdown.find('a.dropdown-toggle').attr('href');
      if (link) {
        window.location.href = link;
      }
    }
  });

  // Handle click events outside of submenu and main dropdowns for smaller screens
  $(document).on('click', function () {
    if (isScreenSmall()) {
      // Close all open main dropdowns and reset their status
      $('.nav-item.dropdown .dropdown-menu.show').removeClass('show');
    }
  });

  // Handle click events on links inside dropdowns
  $('.dropdown-menu').on('click', function (e) {
    // Prevent default behavior for the link
    e.stopPropagation();
  });
});