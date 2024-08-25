window.onload = function() {
    // Hide loading screen after 5 seconds and show main content
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        const loadingMusic = document.getElementById('loading-music');

        loadingScreen.style.display = 'none';  // Ensure the loading screen is hidden
        mainContent.classList.remove('hidden');  // Show the main content
        loadingMusic.play();
        loadingMusic.pause();  // Stop the music when the loading screen disappears
    }, 7000);

    // Play music, swing image, and show text when play button is clicked
    document.getElementById('play-button').addEventListener('click', function() {
        const swingingImage = document.getElementById('swinging-image');
        const popupText = document.getElementById('popup-text');
        const backgroundMusic = document.getElementById('background-music');

        swingingImage.style.animation = 'swing 2s infinite ease-in-out';  // Start swinging animation
        backgroundMusic.play();  // Play the music
        popupText.classList.remove('hidden');
        popupText.classList.add('show-text');  // Show the text with a fade-in effect
    });
};
