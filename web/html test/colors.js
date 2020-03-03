function setBackgroundColor(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
}
function setColor(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
}
function LinkSetColor(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color', color);   
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){
        self.value = 'day';
        setBackgroundColor('black')
        setColor('white');
        LinkSetColor('white');
    } else {
        self.value = 'night';
        setBackgroundColor('white');
        setColor('black');
        LinkSetColor('blue');
        }
    }


    function toggleNav() {
        var nav = document.getElementById("mySidenav");
        var C1 = document.getElementById("main");
      
        if (nav.classList.contains ('suprise')) {
          nav.className = 'sidenav';
          nav.style.width = "0px";
          C1.style.width = "0px";
      
        }
        else {
          nav.className = 'sidenav suprise';
          nav.style.width = "300px";
          C1.style.width = "300px";
        }
      }