function ringing() {
    alert("Deccan Chronicle is getting AUTO REFRESH")
  }

  let linebar = document.getElementById("linebar");
  let menuClose = document.getElementById("menu-close");
  let menu = document.getElementById("menu");

  linebar.addEventListener("click",function(){
      menu.style.display = "block";
  })
  menuClose.addEventListener("click",function(){
      menu.style.display = "none";
  })

  function login() {
    alert("Login Page is ready to opening")
}


  