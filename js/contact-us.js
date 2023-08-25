
AOS.init({ once: true });
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const dropdowns = document.querySelectorAll('.dropdown');

    submitButton.addEventListener('click', function (event) {
        let isFormValid = true;

        dropdowns.forEach(dropdown => {
            const hiddenInput = dropdown.querySelector('input[type="hidden"]');
            const button = dropdown.querySelector('.dropdown-toggle');

            if (hiddenInput && hiddenInput.value === '') {
                isFormValid = false;
                button.classList.add('highlight-empty');
            } else {
                button.classList.remove('highlight-empty');
            }
        });

        if (!isFormValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            alert('Please select a value for the highlighted dropdown(s).');
        }
    });

    // Add event listener to remove highlighting when dropdown buttons are clicked
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-toggle');
        button.addEventListener('click', function () {
            button.classList.remove('highlight-empty');
        });
    });
});

const dropdown = document.querySelector('.dropdown.mb-3');
const acceptedInput = document.getElementById('acceptedValues');
const acceptedDropdown = dropdown.querySelector('.dropdown-toggle');
const acceptedMenu = dropdown.querySelector('.dropdown-menu');

// Add click event listener to the dropdown menu
acceptedMenu.addEventListener('click', (event) => {
    const checkbox = event.target.closest('input[type="checkbox"]');
    if (checkbox) {
        const selectedCheckboxes = acceptedMenu.querySelectorAll("input[type='checkbox']:checked");
        const selectedValues = Array.from(selectedCheckboxes).map(cb => cb.dataset.value);

        if (selectedValues.length > 0) {
            acceptedInput.value = selectedValues.join(", ");
            acceptedDropdown.textContent = selectedValues.join(", "); // Update the dropdown button text
        } else {
            acceptedInput.value = "";
            acceptedDropdown.textContent = "How Are Card Payments Accepted"; // Reset the dropdown button text
        }
    }
});

function updateHiddenInput(inputId, value) {
    const hiddenInput = document.getElementById(inputId);
    hiddenInput.value = value;
}
// Get all dropdowns
const dropdowns = document.querySelectorAll('.dropselect');
// Add click event listener to each dropdown
dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    // Add click event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove the 'active' class from all dropdown items within this dropdown
            dropdownItems.forEach(item => item.classList.remove('active'));

            // Add the 'active' class to the clicked dropdown item
            item.classList.add('active');

            // Replace the button text with the selected option
            button.textContent = item.textContent;
            dropdownMenu.classList.remove('show');
        });
    });
});