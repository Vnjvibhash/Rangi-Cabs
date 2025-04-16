document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const packageCards = document.querySelectorAll('.package-card');

    // Add click event listeners to category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            // Show all packages if 'all' category is selected
            if (category === 'all') {
                packageCards.forEach(card => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                // Filter packages based on category
                packageCards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category').split(' ');
                    if (cardCategories.includes(category)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}); 