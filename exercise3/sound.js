window.addEventListener("load", function() {
    document.getElementById("sound-button-1").addEventListener("click", playSound1);

    function playSound1() {
        var audio = document.getElementById("myAudio");
        audio.play();
    }
    document.getElementById("sound-button-2").addEventListener("click", playSound2);

    function playSound2() {
        var audio = document.getElementById("myAudio2");
        audio.play();
    }

   
  })