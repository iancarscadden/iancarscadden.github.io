// Add any interactive behavior or animations if needed.
// Currently, this is a placeholder for potential future enhancements.

// For example, you could add smooth scrolling:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
