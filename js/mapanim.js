document.addEventListener('DOMContentLoaded', function () {
    const bracketContainer = document.getElementById('bracket-container');
    const mapImage = document.querySelector('.map-image');
    const scanlines = document.querySelector('.holo-scanlines'); // Add scanlines overlay
  
  //  if (!bracketContainer || !mapImage || !scanlines) {
   //   console.error('Bracket, Map Image, or Scanlines not found');
   //   return;
   // }
  
   // console.log('Bracket, Map Image, and Scanlines loaded');
  
    // Initial states for zoom and pan
    let zoomDirection = 1;
    let zoomLevel = 1.0; // Start at normal size after rotation
    let panX = -50; // Centered
    let panY = -50; // Centered
    let panDirectionX = 1;
    let panDirectionY = 1;
  
    // Function to animate the map with subtle zoom and pan
    function animateMap() {
      // Apply subtle zooming effect after the initial zoom-in
      zoomLevel += (zoomDirection * 0.002);
  
      if (zoomLevel >= 1.15 || zoomLevel <= 1.05) {
        zoomDirection *= -1;
      }
  
      // Adjust panning values
      panX += panDirectionX * 0.05;
      panY += panDirectionY * 0.02;
  
      if (panX > -45 || panX < -55) panDirectionX *= -1;
      if (panY > -48 || panY < -52) panDirectionY *= -1;
  
      // Apply transformations to the map (pan + zoom)
      mapImage.style.transform = `translate(${panX}%, ${panY}%) scale(${zoomLevel})`;
  
      requestAnimationFrame(animateMap); // Continue the animation
    }
  
    // Function to handle initial rotation, zoom-in, and opacity fade-in
    function initialMapZoomAndRotate() {
      // Rotate the map to its normal orientation and zoom in to full size
      mapImage.style.transform = `translate(-50%, -50%) scale(1) rotate(0deg)`; // Slow rotation and zoom
      mapImage.style.opacity = '1'; // Fade in the map as it rotates
   //   console.log('Initial map rotation, zoom-in, and fade-in started');
  
      // After rotation/zoom-in is finished, start the subtle pan and zoom effect
      setTimeout(() => {
        requestAnimationFrame(animateMap); // Start continuous animation after initial effect
   //     console.log('Initial map rotation and zoom completed. Starting panning and zooming.');
      }, 6000); // Wait 6 seconds for the initial animation to complete
    }
  
    // Start the map animation sequence
    setTimeout(() => {
      bracketContainer.style.display = 'block'; // Display the bracket
      scanlines.style.display = 'block'; // Display the scanlines
  //    console.log('Bracket and scanlines displayed, starting initial map animation');
      setTimeout(initialMapZoomAndRotate, 500); // Start rotation, zoom-in, and fade-in after brief delay
    }, 2000); // Initial delay to simulate loading
  });
  