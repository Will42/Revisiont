function animateMenu(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {

    var dropdowns = document.getElementsByClassName("Dropdown");
    var icon = document.getElementsByClassName("menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
  }

      for (i = 0; i < icon.length; i++) {
      var openIcon = icon[i];
      if (openIcon.classList.contains('change')) {
        openIcon.classList.remove('change');
      }
    }
  }
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
