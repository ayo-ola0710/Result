// Predefined times in the format you want (e.g. 24-hour format).
const times = [
    '01:00', '02:00','03:00','04:00', '05:00','06:00', '07:00','08:00', '09:00',  '10:00',  '11:00',  
    '12:00',  '13:00',  '14:00',  '15:00',  '16:00',  '17:00',  '18:00','19:00', '20:00', '21:00',
    '22:00','23:00','00:00',
];

const timeInput = document.getElementById('timeInput');
const timeDropdown = document.getElementById('timeDropdown');

// Show the dropdown when the input is clicked (mousedown).
timeInput.addEventListener('mousedown', (event) => {
    event.preventDefault(); // Prevent default behavior.
    toggleDropdown(); // Toggle the dropdown display.
});

// Populate the dropdown with available times.
function populateDropdown() {
    timeDropdown.innerHTML = ''; // Clear existing dropdown items.
    times.forEach(time => {
        const timeDiv = document.createElement('div');
        timeDiv.textContent = time;
        timeDiv.addEventListener('mousedown', () => {
            timeInput.value = time;
            hideDropdown();
        });
        timeDropdown.appendChild(timeDiv);
    });
}

// Show the dropdown.
function showDropdown() {
    timeDropdown.style.display = 'block';
}

// Hide the dropdown.
function hideDropdown() {
    timeDropdown.style.display = 'none';
}

// Toggle the dropdown visibility.
function toggleDropdown() {
    if (timeDropdown.style.display === 'block') {
        hideDropdown();
    } else {
        populateDropdown();
        showDropdown();
    }
}

// Close the dropdown if clicked outside.
document.addEventListener('click', (event) => {
    if (!timeInput.contains(event.target) && !timeDropdown.contains(event.target)) {
        hideDropdown();
    }
});

