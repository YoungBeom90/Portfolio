// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("product1").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("product1").style.marginLeft = "0";
// }
function toggleNav() {
  var nav = document.getElementById("my-side-nav");
  var C1 = document.getElementById("product1");

  if (nav.classList.contains ('suprise')) {
    nav.classList = 'side-nav';
    nav.style.width = "0px";
    C1.style.marginLeft = "0px";

  }
  else {
    nav.classList = 'side-nav suprise';
    nav.style.width = "250px";
    C1.style.marginLeft = "250px";
  }
}

function change(x) {
  x.classList.toggle("fa-list-ul");
}


