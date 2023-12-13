const countDownDate = new Date("July 17, 2024 11:30:00").getTime();
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dny").innerHTML = days;
  document.getElementById("hodiny").innerHTML = hours;
  document.getElementById("minuty").innerHTML = minutes;
  document.getElementById("sekundy").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dny").innerHTML = "0";
    document.getElementById("hodiny").innerHTML = "0";
    document.getElementById("minuty").innerHTML = "0";
    document.getElementById("sekundy").innerHTML = "0";
  }
}, 1000);

const hamburgerIconOpen = document.querySelector(".hamburger-icon--open");
const hamburgerIconClose = document.querySelector(".hamburger-icon--close");
const mobilniMenu = document.querySelector("#mobilni-menu");


hamburgerIconOpen.addEventListener("click", ()=>{
  if(hamburgerIconOpen.classList.contains("show")){
    hamburgerIconOpen.classList.remove("show");
    hamburgerIconOpen.classList.add("hide");
    hamburgerIconClose.classList.add("show");
    mobilniMenu.classList.add("show");
    
  }
})

hamburgerIconClose.addEventListener("click", ()=>{
  if(hamburgerIconClose.classList.contains("show")){
    hamburgerIconClose.classList.remove("show");
    hamburgerIconClose.classList.add("hide");
    hamburgerIconOpen.classList.add("show");
    mobilniMenu.classList.remove("show");
    mobilniMenu.classList.add("hide");
  }
})