document.querySelectorAll('.social-links img').forEach(link => {
    link.addEventListener('mouseover', () => link.style.opacity = '0.8');
    link.addEventListener('mouseout', () => link.style.opacity = '1');
});