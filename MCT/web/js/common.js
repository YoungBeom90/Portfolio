window.onload = function() {
  // setTimeout (function(){
  //   scrollTo(0,0);
  // }, 100);

  function scrollFunction() {
    var mybutton = document.getElementById("goToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  console.log('go');
  console.log('dpd');
  function scrollDrawingFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("topDrawingBar").style.width = scrolled + "%";
  }

  window.onscroll = function() {
    scrollFunction();
    scrollDrawingFunction();
  };

  document.getElementById('goToTop').onclick = function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  };

}

