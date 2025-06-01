// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dayNightToggle');
    const daySection = document.querySelector('.day-section');
    const nightSection = document.querySelector('.night-section');
    const titleOverlay = document.querySelector('.title-overlay');
    
    // Toggle switch event handler
    function handleToggle() {
        const isNight = toggle.checked;
        
        if (isNight) {
            // Switch to night
            daySection.classList.add('hidden');
            nightSection.classList.add('active');
            
            // Update title to "N" for night
            if (titleOverlay) {
                titleOverlay.textContent = 'N';
                titleOverlay.style.color = '#ffffff';
                titleOverlay.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
            }
        } else {
            // Switch to day
            daySection.classList.remove('hidden');
            nightSection.classList.remove('active');
            
            // Update title to "D" for day
            if (titleOverlay) {
                titleOverlay.textContent = 'D';
                titleOverlay.style.color = '#ffffff';
                titleOverlay.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
            }
        }
    }
    
    // Add event listener to toggle
    if (toggle) {
        toggle.addEventListener('change', handleToggle);
    }
    
    // Keyboard support
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case ' ':
            case 'Enter':
                if (event.target !== toggle) {
                    event.preventDefault();
                    toggle.checked = !toggle.checked;
                    handleToggle();
                }
                break;
            case 'ArrowLeft':
                event.preventDefault();
                toggle.checked = false;
                handleToggle();
                break;
            case 'ArrowRight':
                event.preventDefault();
                toggle.checked = true;
                handleToggle();
                break;
        }
    });
    
    // Initialize the correct state
    handleToggle();
});
