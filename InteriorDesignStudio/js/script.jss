// JavaScript function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Display welcome section on page load
window.onload = function() {
    showSection('welcome');
};

// Function to show service details (placeholder function)
function showServiceDetails(serviceType) {
    alert("Details about " + serviceType + " design services.");
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').classList.remove('hidden');
});