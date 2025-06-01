// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the SVG elements and toggle button
    const daySvg = document.getElementById('daySvg');
    const nightSvg = document.getElementById('nightSvg');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Track current state (true = day, false = night)
    let isDay = true;
    
    // Function to toggle between day and night
    function toggleScene() {
        if (isDay) {
            // Switch to night
            daySvg.classList.remove('active');
            nightSvg.classList.add('active');
            toggleBtn.innerHTML = '☀️ Switch to Day';
            toggleBtn.style.background = 'linear-gradient(45deg, #2c3e50, #4a6741)';
            isDay = false;
        } else {
            // Switch to day
            nightSvg.classList.remove('active');
            daySvg.classList.add('active');
            toggleBtn.innerHTML = '🌙 Switch to Night';
            toggleBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            isDay = true;
        }
    }
    
    // Add click event listener to the toggle button
    toggleBtn.addEventListener('click', toggleScene);
    
    // Optional: Add keyboard support (spacebar to toggle)
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent page scroll
            toggleScene();
        }
    });
    
    // Optional: Add some interactive hover effects
    function addHoverEffects() {
        const svgElements = document.querySelectorAll('.scene-svg');
        
        svgElements.forEach(svg => {
            svg.addEventListener('mouseenter', function() {
                this.style.transform = this.classList.contains('active') ? 'scale(1.05)' : 'scale(0.95)';
            });
            
            svg.addEventListener('mouseleave', function() {
                this.style.transform = this.classList.contains('active') ? 'scale(1)' : 'scale(0.9)';
            });
        });
    }
    
    // Initialize hover effects
    addHoverEffects();
    
    // Optional: Auto-toggle every 5 seconds (uncomment if desired)
    // setInterval(toggleScene, 5000);
});
