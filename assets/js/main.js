// Navigation functionality for Title Analysis System Documentation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    const buttons = document.querySelectorAll('.nav-item');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Toggle step card expansion
function toggleCard(card) {
    card.classList.toggle('expanded');
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.replace('.html', '') === currentPage) {
            item.classList.add('active');
        }
    });
});
