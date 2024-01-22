const loader = document.querySelector('.loader');
const video = document.querySelector('.loader video');

// Check if the page is being loaded for the first time or being refreshed
if (performance.navigation.type === 1) {
  // Page is being refreshed, hide the loader immediately
  loader.classList.add('hide');
} else {
  // Page is being loaded for the first time, show the loader until the video is loaded
  window.addEventListener('load', function () {
    loader.classList.remove('hide');
  });

  video.addEventListener('loadedmetadata', function () {
    video.addEventListener('ended', function () {
      loader.classList.add('hide');
    });

    video.addEventListener('error', function () {
      loader.classList.add('hide');
    });
  });

  window.addEventListener('beforeunload', function () {
    video.pause();
    video.currentTime = 0;
  });
}