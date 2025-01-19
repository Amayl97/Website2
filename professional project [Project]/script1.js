function updatemenu() 
 {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
 }
 
//jquery code
$(function(){
  $('.carousel').carousel({
    interval: 1000
  });
})
  