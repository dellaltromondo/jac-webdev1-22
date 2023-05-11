function myFunction() {
  const searchInput = document.getElementById("search");
  const sections = document.querySelectorAll("section[id]");
  searchInput.addEventListener("keyup", function(event) {
  const query = event.target.value.toLowerCase();
  sections.forEach(function(section) {
    const title = section.querySelector("h3").innerText.toLowerCase();
    if (title.indexOf(query) !== -1 || section.id.toLowerCase().indexOf(query) !== -1) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});
}









//var input, filter, ul, li, a, i, txtValue;
//    input = document.getElementById("myInput");
//    filter = input.value.toUpperCase();
//    id = document.getElementById("myUL");
//    li = id.getElementsByTagName("li");
//    for (i = 0; i < li.length; i++) {
//        a = li[i].getElementsByTagName("a")[0];
//        txtValue = a.textContent || a.innerText;
//        if (txtValue.toUpperCase().indexOf(filter) > -1) {
//            li[i].style.display = "";
//        } else {
//            li[i].style.display = "none";   
//        }
//    }