// Load Socket.io from CDN
const script = document.createElement("script");
script.src = "https://cdn.socket.io/4.7.2/socket.io.min.js";
script.onload = () => {

  const socket = io("http://localhost:3000");

  let roomId = prompt("Enter Room ID (same on both devices):");

  socket.emit("join-room", roomId);

  function waitForVideo() {
    const video = document.querySelector("video");
    if (video) {

      video.addEventListener("play", () => {
        socket.emit("play", {
          roomId: roomId,
          time: video.currentTime
        });
      });

      video.addEventListener("pause", () => {
        socket.emit("pause", {
          roomId: roomId,
          time: video.currentTime
        });
      });

      socket.on("play", (time) => {
        video.currentTime = time;
        video.play();
      });

      socket.on("pause", (time) => {
        video.currentTime = time;
        video.pause();
      });

    } else {
      setTimeout(waitForVideo, 1000);
    }
  }

  waitForVideo();

};
document.head.appendChild(script);