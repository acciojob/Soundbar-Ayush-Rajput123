const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    function stopAll() {
      sounds.forEach(function(sound) {
        const audio = document.getElementById(sound + "-audio");
        audio.pause();
        audio.currentTime = 0;
      });
    }

    sounds.forEach(function(sound) {
      const btn = document.getElementById(sound);
      btn.addEventListener('click', function() {
        stopAll();
        const audio = document.getElementById(sound + "-audio");
        audio.play();
      });
    });

    document.getElementById('stop').addEventListener('click', stopAll);