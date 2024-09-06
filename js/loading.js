document.addEventListener('DOMContentLoaded', function () {
  // Music button event
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

// Scrolling data text overlays
document.addEventListener('DOMContentLoaded', function () {

  function getRandomAssemblyLine() {
    return {
      address: addresses[Math.floor(Math.random() * addresses.length)],
      instruction: `${instructions[Math.floor(Math.random() * instructions.length)]} ${registers[Math.floor(Math.random() * registers.length)]}`
    };
  }

  let leftLineNumber = 1;  // Starting line number for left column
  let rightLineNumber = 101;  // Starting line number for right column
  let currentAsmLineLeft = 0;
  let currentAsmLineRight = 0;
  const maxLines = 20;  // Maximum lines to display before resetting

  const leftAsmDelay = 500;  // Delay for the left column
  const rightAsmDelay = 700;  // Delay for the right column

  // Function to insert a complete block of predefined code with separators
  function insertPredefinedBlock(feedId, block, lineNumber) {
    const feed = document.getElementById(feedId);

    // Insert block label (announcement)
    const labelElement = document.createElement('div');
    labelElement.classList.add('assembly-line');
    labelElement.innerHTML = `<span>${lineNumber}</span> <span>${block.label}</span>`;
    feed.appendChild(labelElement);
    lineNumber++;

    // Insert line separator ----------------
    const separatorElementStart = document.createElement('div');
    separatorElementStart.classList.add('assembly-line');
    separatorElementStart.innerHTML = `<span>${lineNumber}</span> <span>--------------------</span>`;
    feed.appendChild(separatorElementStart);
    lineNumber++;

    // Insert each line of the block code, prefixed with '>'
    block.code.forEach((codeLine) => {
      const codeElement = document.createElement('div');
      codeElement.classList.add('assembly-line', 'indented'); // Added 'indented' class
      codeElement.innerHTML = `<span>${lineNumber}</span> <span>> ${codeLine}</span>`;
      feed.appendChild(codeElement);
      lineNumber++;
    });

    // Insert line separator to end the block
    const separatorElementEnd = document.createElement('div');
    separatorElementEnd.classList.add('assembly-line');
    separatorElementEnd.innerHTML = `<span>${lineNumber}</span> <span>--------------------</span>`;
    feed.appendChild(separatorElementEnd);
    lineNumber++;

    return lineNumber;  // Return updated line number after inserting block
  }

  function addLeftAssemblyLine() {
    const lineData = getRandomAssemblyLine();
    const feed = document.getElementById('assembly-feed-left');
    const lineElement = document.createElement('div');
    lineElement.classList.add('assembly-line');

    // Randomly insert predefined code blocks with separators
    if (Math.random() > 0.85) {
      const block = predefinedBlocks[Math.floor(Math.random() * predefinedBlocks.length)];
      leftLineNumber = insertPredefinedBlock('assembly-feed-left', block, leftLineNumber);
    } else {
      lineElement.innerHTML = `<span>${leftLineNumber}</span> <span>${lineData.address}</span> <span>${lineData.instruction}</span>`;
      feed.appendChild(lineElement);
      leftLineNumber++;
    }

    currentAsmLineLeft++;

    // Remove old lines after max limit
    if (currentAsmLineLeft > maxLines) {
      feed.firstChild.remove();
      currentAsmLineLeft--;
    }

    setTimeout(addLeftAssemblyLine, leftAsmDelay);
  }

  function addRightAssemblyLine() {
    const lineData = getRandomAssemblyLine();
    const feed = document.getElementById('assembly-feed-right');
    const lineElement = document.createElement('div');
    lineElement.classList.add('assembly-line');

    // Randomly insert predefined code blocks with separators
    if (Math.random() > 0.85) {
      const block = predefinedBlocks[Math.floor(Math.random() * predefinedBlocks.length)];
      rightLineNumber = insertPredefinedBlock('assembly-feed-right', block, rightLineNumber);
    } else {
      lineElement.innerHTML = `<span>${rightLineNumber}</span> <span>${lineData.address}</span> <span>${lineData.instruction}</span>`;
      feed.appendChild(lineElement);
      rightLineNumber++;
    }

    currentAsmLineRight++;

    // Remove old lines after max limit
    if (currentAsmLineRight > maxLines) {
      feed.firstChild.remove();
      currentAsmLineRight--;
    }

    setTimeout(addRightAssemblyLine, rightAsmDelay);
  }

  // Start both feeds independently
  addLeftAssemblyLine();
  addRightAssemblyLine();
});

/*--Welcome Message--*/
document.addEventListener('DOMContentLoaded', function () {
  // Simulate the player's name (this could come from GMod hooks in the real scenario)
  const playerName = "Survivor";  // Simulated player name
  
  // Update the player name in the DOM
  document.getElementById('playerName').innerText = `Welcome to the Future War, ${playerName}`;
  
  // Simulate server status being updated after 2 seconds (could come from GMod)
  setTimeout(() => {
    document.getElementById('serverStatus').innerText = "Skynet systems are online. Preparing battlefield resources...";
  }, 3000);
});