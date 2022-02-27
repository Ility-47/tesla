//let male = document.getElementById("male");
//let female = document.getElementById("female");
//
//male.addEventListener("click", function() {
//  this.classList.add("active");
//});
//
//female.addEventListener("click", function() {
//    let male = document.getElementById("male");
//    if(male.onclick){
//        male.classList.add('noactive');
//        this.classList.add("active");    
//    }else{
//    //this.classList.add("active");
//    }
//  });



function next (){
const  page0 =  document.getElementById('page__0');  
const  page1 =  document.getElementById('page__1');
const  page2 =  document.getElementById('page__2');
page0.style.display = "none";
page1.style.display = "none";
page2.style.display = "block";
}

function nextnext (){
    const  page2 =  document.getElementById('page__2');
    const  page3 =  document.getElementById('page__3');
    page2.style.display = "none";
    page3.style.display = "grid";
}