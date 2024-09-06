document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');
    const playMusicButton = document.getElementById('play-music');
  
    // GMod Hook: Autoplay music if GMod is the environment (assumed that GMod won't block autoplay)
    function autoPlayMusic() {
      music.volume = 0.5; // Set volume
      music.play()
        .then(() => {
          console.log("Music is playing automatically!");
          playMusicButton.style.display = "none"; // Hide the button when autoplay works
        })
        .catch((error) => {
          console.error("Autoplay failed, falling back to click to play", error);
          playMusicButton.style.display = "block"; // Show the button if autoplay fails
        });
    }
  
    // Try to autoplay music
    autoPlayMusic();
  
    // Fallback for browsers: Click to start music
    playMusicButton.addEventListener('click', function () {
      if (music.paused) {
        music.play();
        playMusicButton.innerText = "Click to Stop Music";
      } else {
        music.pause();
        playMusicButton.innerText = "Click to Start Music";
      }
    });
  
    // Optionally, hook into GMod's SetStatusChanged for environment-specific triggers (like player names)
    window.SetStatusChanged = function (status) {
      if (status.includes("Player")) {
        const playerName = status.split(" ")[1]; // Extract player name
        document.getElementById('playerName').innerText = `Welcome to the Future War, ${playerName}`;
      }
    };
  });
  