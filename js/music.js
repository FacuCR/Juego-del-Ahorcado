let music = document.getElementById("my-audio");
isPlaying = false;

function togglePlay() {
  isPlaying ? music.pause() : music.play();
  //isPlaying ? element.classList.toggle("fa-solid fa-volume-xmark audio") : element.classList.toggle("fas fa-volume-up audio");
}

music.onplaying = function () {
  isPlaying = true;
  document.querySelector(".audio").classList.remove("fa-volume-xmark");
  document.querySelector(".audio").classList.add("fa-volume-up");
  
};
music.onpause = function () {
  isPlaying = false;
  document.querySelector(".audio").classList.remove("fa-volume-up");
  document.querySelector(".audio").classList.add("fa-volume-xmark");  
};