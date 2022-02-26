let male = document.getElementById("male");
let female = document.getElementById("female");

male.addEventListener("click", function() {
  this.classList.add("active");
});

female.addEventListener("click", function() {
    this.classList.add("active");
  });


//let next = document.getElementById('next');
//let next2 = document.getElementById('next2');
//let page = document.querySelectorAll('page__1');
//let page2 = document.querySelector('page__2');
//let page3 = document.querySelector('page__3');
//
//next.addEventListener("click", function(){
//    page.style.display = 'none';
//    page2.style.display = 'block';
//})


//function next (){
//    document.getElementById('page__1').style.display = "none";
//    document.getElementById('page__2').style.display = "block";
//}