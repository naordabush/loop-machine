const audioPlayer = document.querySelector(".player1");
const audioPlayer2 = document.querySelector(".player2");
const audioPlayer3 = document.querySelector(".player3");
const audioPlayer4 = document.querySelector(".player4");
const audioPlayer5 = document.querySelector(".player5");
const audioPlayer6 = document.querySelector(".player6");
const audioPlayer7 = document.querySelector(".player7");
const audioPlayer8 = document.querySelector(".player8");
const audioPlayer9 = document.querySelector(".player9");

//Audio files
const audio = new Audio("../assets/_tambourine_shake_higher.mp3");
const audio2 = new Audio("../assets/HIGH%20VOC.mp3");
const audio3 = new Audio("../assets/ALL%20TRACK.mp3");
const audio4 = new Audio("../assets/B%20VOC.mp3");
const audio5 = new Audio("../assets/DRUMS.mp3");
const audio6 = new Audio("../assets/HE%20HE%20VOC.mp3");
const audio7 = new Audio("../assets/JIBRISH.mp3");
const audio8 = new Audio("../assets/LEAD%201.mp3");
const audio9 = new Audio("../assets/UUHO%20VOC.mp3");

const loopFun = () => {
  if (audio.loop == true || audio2.loop == true || audio3.loop == true || audio4.loop == true || audio5.loop == true || audio6.loop == true || audio7.loop == true || audio8.loop == true || audio9.loop == true) {
    audio.loop = false;
    audio2.loop = false;
    audio3.loop = false;
    audio4.loop = false;
    audio5.loop = false;
    audio6.loop = false;
    audio7.loop = false;
    audio8.loop = false;
    audio9.loop = false;
  } else {
    audio.loop = true;
    audio2.loop = true;
    audio3.loop = true;
    audio4.loop = true;
    audio5.loop = true;
    audio6.loop = true;
    audio7.loop = true;
    audio8.loop = true;
    audio9.loop = true;
  }
};

const stop = () => {
  audio.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.pause();
  audio.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
  audio5.currentTime = 0;
  audio6.currentTime = 0;
  audio7.currentTime = 0;
  audio8.currentTime = 0;
  audio9.currentTime = 0;
};

const offFun = () => {
  if (audio.loop == false || audio2.loop == false || audio3.loop == false || audio4.loop == false || audio5.loop == false || audio6.loop == false || audio7.loop == false || audio8.loop == false || audio9.loop == false) {
    audio.loop = true;
    audio2.loop = true;
    audio3.loop = true;
    audio4.loop = true;
    audio5.loop = true;
    audio6.loop = true;
    audio7.loop = true;
    audio8.loop = true;
    audio9.loop = true;
    audio.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    audio6.play();
    audio7.play();
    audio8.play();
    audio9.play();
  } else {
    audio.loop = false;
    audio2.loop = false;
    audio3.loop = false;
    audio4.loop = false;
    audio5.loop = false;
    audio6.loop = false;
    audio7.loop = false;
    audio8.loop = false;
    audio9.loop = false;
  }
};

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = 0.75;
  },
  false
);
audio2.addEventListener(
  "loadeddata",
  () => {
    audioPlayer2.querySelector(".time2 .length").textContent = getTimeCodeFromNum(audio2.duration);
    audio2.volume = 0.75;
  },
  false
);

audio3.addEventListener(
  "loadeddata",
  () => {
    audioPlayer3.querySelector(".time3 .length").textContent = getTimeCodeFromNum(audio3.duration);
    audio3.volume = 0.75;
  },
  false
);
audio4.addEventListener(
  "loadeddata",
  () => {
    audioPlayer4.querySelector(".time4 .length").textContent = getTimeCodeFromNum(audio4.duration);
    audio4.volume = 0.75;
  },
  false
);
audio5.addEventListener(
  "loadeddata",
  () => {
    audioPlayer5.querySelector(".time5 .length").textContent = getTimeCodeFromNum(audio5.duration);
    audio5.volume = 0.75;
  },
  false
);
audio6.addEventListener(
  "loadeddata",
  () => {
    audioPlayer6.querySelector(".time6 .length").textContent = getTimeCodeFromNum(audio6.duration);
    audio6.volume = 0.75;
  },
  false
);
audio7.addEventListener(
  "loadeddata",
  () => {
    audioPlayer7.querySelector(".time7 .length").textContent = getTimeCodeFromNum(audio7.duration);
    audio7.volume = 0.75;
  },
  false
);
audio8.addEventListener(
  "loadeddata",
  () => {
    audioPlayer8.querySelector(".time8 .length").textContent = getTimeCodeFromNum(audio8.duration);
    audio8.volume = 0.75;
  },
  false
);
audio9.addEventListener(
  "loadeddata",
  () => {
    audioPlayer9.querySelector(".time9 .length").textContent = getTimeCodeFromNum(audio9.duration);
    audio9.volume = 0.75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener(
  "click",
  (e) => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
    audio.currentTime = timeToSeek;
  },
  false
);

const timeline2 = audioPlayer2.querySelector(".timeline2");
timeline2.addEventListener(
  "click",
  (e) => {
    const timelineWidth2 = window.getComputedStyle(timeline2).width;
    const timeToSeek2 = (e.offsetX / parseInt(timelineWidth2)) * audio.duration;
    audio2.currentTime = timeToSeek2;
  },
  false
);

const timeline3 = audioPlayer3.querySelector(".timeline3");
timeline3.addEventListener(
  "click",
  (e) => {
    const timelineWidth3 = window.getComputedStyle(timeline3).width;
    const timeToSeek3 = (e.offsetX / parseInt(timelineWidth3)) * audio.duration;
    audio3.currentTime = timeToSeek3;
  },
  false
);

const timeline4 = audioPlayer4.querySelector(".timeline4");
timeline4.addEventListener(
  "click",
  (e) => {
    const timelineWidth4 = window.getComputedStyle(timeline4).width;
    const timeToSeek4 = (e.offsetX / parseInt(timelineWidth4)) * audio.duration;
    audio4.currentTime = timeToSeek4;
  },
  false
);

const timeline5 = audioPlayer5.querySelector(".timeline5");
timeline5.addEventListener(
  "click",
  (e) => {
    const timelineWidth5 = window.getComputedStyle(timeline5).width;
    const timeToSeek5 = (e.offsetX / parseInt(timelineWidth5)) * audio.duration;
    audio5.currentTime = timeToSeek5;
  },
  false
);

const timeline6 = audioPlayer6.querySelector(".timeline6");
timeline6.addEventListener(
  "click",
  (e) => {
    const timelineWidth6 = window.getComputedStyle(timeline6).width;
    const timeToSeek6 = (e.offsetX / parseInt(timelineWidth6)) * audio.duration;
    audio6.currentTime = timeToSeek6;
  },
  false
);
const timeline7 = audioPlayer7.querySelector(".timeline7");
timeline7.addEventListener(
  "click",
  (e) => {
    const timelineWidth7 = window.getComputedStyle(timeline7).width;
    const timeToSeek7 = (e.offsetX / parseInt(timelineWidth7)) * audio.duration;
    audio7.currentTime = timeToSeek7;
  },
  false
);

const timeline8 = audioPlayer8.querySelector(".timeline8");
timeline8.addEventListener(
  "click",
  (e) => {
    const timelineWidth8 = window.getComputedStyle(timeline8).width;
    const timeToSeek8 = (e.offsetX / parseInt(timelineWidth8)) * audio.duration;
    audio8.currentTime = timeToSeek8;
  },
  false
);
const timeline9 = audioPlayer9.querySelector(".timeline9");
timeline9.addEventListener(
  "click",
  (e) => {
    const timelineWidth9 = window.getComputedStyle(timeline9).width;
    const timeToSeek9 = (e.offsetX / parseInt(timelineWidth9)) * audio.duration;
    audio9.currentTime = timeToSeek9;
  },
  false
);

const progressBar = audioPlayer.querySelector(".progress");
const progressBar2 = audioPlayer2.querySelector(".progress2");
const progressBar3 = audioPlayer3.querySelector(".progress3");
const progressBar4 = audioPlayer4.querySelector(".progress4");
const progressBar5 = audioPlayer5.querySelector(".progress5");
const progressBar6 = audioPlayer6.querySelector(".progress6");
const progressBar7 = audioPlayer7.querySelector(".progress7");
const progressBar8 = audioPlayer8.querySelector(".progress8");
const progressBar9 = audioPlayer9.querySelector(".progress9");
setInterval(() => {
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);

  progressBar2.style.width = (audio2.currentTime / audio2.duration) * 100 + "%";
  audioPlayer2.querySelector(".time2 .current").textContent = getTimeCodeFromNum(audio2.currentTime);

  progressBar3.style.width = (audio3.currentTime / audio3.duration) * 100 + "%";
  audioPlayer3.querySelector(".time3 .current").textContent = getTimeCodeFromNum(audio3.currentTime);

  progressBar4.style.width = (audio4.currentTime / audio4.duration) * 100 + "%";
  audioPlayer4.querySelector(".time4 .current").textContent = getTimeCodeFromNum(audio4.currentTime);

  progressBar5.style.width = (audio5.currentTime / audio5.duration) * 100 + "%";
  audioPlayer5.querySelector(".time5 .current").textContent = getTimeCodeFromNum(audio5.currentTime);

  progressBar6.style.width = (audio6.currentTime / audio6.duration) * 100 + "%";
  audioPlayer6.querySelector(".time6 .current").textContent = getTimeCodeFromNum(audio6.currentTime);
  progressBar7.style.width = (audio7.currentTime / audio7.duration) * 100 + "%";
  audioPlayer7.querySelector(".time7 .current").textContent = getTimeCodeFromNum(audio7.currentTime);

  progressBar8.style.width = (audio8.currentTime / audio8.duration) * 100 + "%";
  audioPlayer8.querySelector(".time8 .current").textContent = getTimeCodeFromNum(audio8.currentTime);

  progressBar9.style.width = (audio9.currentTime / audio9.duration) * 100 + "%";
  audioPlayer9.querySelector(".time9 .current").textContent = getTimeCodeFromNum(audio9.currentTime);
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");

playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
      audio2.play();
      audio3.play();
      audio4.play();
      audio5.play();
      audio6.play();
      audio7.play();
      audio8.play();
      audio9.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

audioPlayer2.querySelector(".volume-button2").addEventListener("click", () => {
  const volumeEl = audioPlayer2.querySelector(".volume-container2 .volume2");
  audio2.muted = !audio2.muted;
  if (audio2.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

audioPlayer3.querySelector(".volume-button3").addEventListener("click", () => {
  const volumeEl = audioPlayer3.querySelector(".volume-container3 .volume3");
  audio3.muted = !audio3.muted;
  if (audio3.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});
audioPlayer4.querySelector(".volume-button4").addEventListener("click", () => {
  const volumeEl = audioPlayer4.querySelector(".volume-container4 .volume4");
  audio4.muted = !audio4.muted;
  if (audio4.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

audioPlayer5.querySelector(".volume-button5").addEventListener("click", () => {
  const volumeEl = audioPlayer5.querySelector(".volume-container5 .volume5");
  audio5.muted = !audio5.muted;
  if (audio5.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});
audioPlayer6.querySelector(".volume-button6").addEventListener("click", () => {
  const volumeEl = audioPlayer6.querySelector(".volume-container6 .volume6");
  audio6.muted = !audio6.muted;
  if (audio6.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});
audioPlayer7.querySelector(".volume-button7").addEventListener("click", () => {
  const volumeEl = audioPlayer7.querySelector(".volume-container7 .volume7");
  audio7.muted = !audio7.muted;
  if (audio7.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

audioPlayer8.querySelector(".volume-button8").addEventListener("click", () => {
  const volumeEl = audioPlayer8.querySelector(".volume-container8 .volume8");
  audio8.muted = !audio8.muted;
  if (audio8.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

audioPlayer9.querySelector(".volume-button9").addEventListener("click", () => {
  const volumeEl = audioPlayer9.querySelector(".volume-container9 .volume9");
  audio9.muted = !audio9.muted;
  if (audio9.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}
