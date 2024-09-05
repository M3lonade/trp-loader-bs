document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const statusText = document.getElementById('status-text');
    let totalFiles = 0;
    let filesNeeded = 0;
  
    function updateProgressBar() {
      const progressPercentage = Math.floor(((totalFiles - filesNeeded) / totalFiles) * 100);
      progressBar.style.width = progressPercentage + '%';
      progressBar.innerText = progressPercentage + '%';
  
      if (progressPercentage === 100) {
        statusText.innerText = 'Skynet Systems Online. Prepare for deployment.';
      }
    }
  
    // GMod Hook: Total files to download
    window.SetFilesTotal = function (total) {
      totalFiles = total;
      if (totalFiles === 0) {
        progressBar.style.width = "100%";
        progressBar.innerText = "100%";
        statusText.innerText = "No downloads needed.";
      }
    };
  
    // GMod Hook: Files remaining to download
    window.SetFilesNeeded = function (needed) {
      filesNeeded = needed;
      updateProgressBar();
    };
  
    // GMod Hook: Joining status changed
    window.SetStatusChanged = function (status) {
      statusText.innerText = status;
    };
  
    // Optional: Start background music on click
    const bgMusic = document.getElementById('bg-music');
    const playButton = document.getElementById('play-music');
    
    playButton.addEventListener('click', function() {
      if (bgMusic.paused) {
        bgMusic.play();
        playButton.innerText = 'Stop Music';
      } else {
        bgMusic.pause();
        playButton.innerText = 'Click to Start Music';
      }
    });
  });
  