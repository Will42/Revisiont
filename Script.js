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