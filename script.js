const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  let currentAudio = null;

  sounds.forEach(function(sound) {
    const btn = document.getElementById(sound);
    btn.addEventListener('click', function() {
      stopSound();
      currentAudio = new Audio("sounds/" + sound + ".mp3");
      currentAudio.play();
    });
  });

  document.getElementById('stop').addEventListener('click', stopSound);

  function stopSound() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  }