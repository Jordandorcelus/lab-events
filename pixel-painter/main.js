// Select DOM elements
const palette = document.querySelectorAll('.color');
const currentColor = document.getElementById('current-color');
const canvas = document.getElementById('canvas');

// Create the grid (10 x 8 = 80 cells)
for (let i = 0; i < 80; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.appendChild(cell);

    // Color cell on click
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = currentColor.style.backgroundColor;
    });
}

// Set selected color
palette.forEach(color => {
    color.addEventListener('click', () => {
        currentColor.style.backgroundColor = color.style.backgroundColor;
    });
});

// Optional Features:

// Reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset All Cells';
resetButton.style.margin = '10px';
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});
document.getElementById('wrapper').appendChild(resetButton);

// Fill all button
const fillAllButton = document.createElement('button');
fillAllButton.textContent = 'Add All';
fillAllButton.style.margin = '10px';
fillAllButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = currentColor.style.backgroundColor;
    });
});
document.getElementById('wrapper').appendChild(fillAllButton);
