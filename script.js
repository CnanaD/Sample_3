function playTrailer() {
    let vidT = document.querySelector(".trailer");
    let videoAuto = document.querySelector(".trailer video");
    vidT.classList.add("active");
    videoAuto.setAttribute("autoplay","true")
}

function closeTraler() {
    let vidT = document.querySelector(".trailer");
    vidT.classList.remove("active")
    let videoAuto = document.querySelector(".trailer video");
    videoAuto.currentTime = 0;
    videoAuto.pause();
}