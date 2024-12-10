document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.comparison-table__table tbody tr');
    const toggleButton = document.querySelector('.toggle-visibility-btn');

    // Toggle row visibility
    toggleButton.addEventListener('click', () => {
        rows.forEach((row) => {
            if (row.style.display === 'none') {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Highlight rows on hover
    rows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#d1ecf1';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});