function next (){
const  page1 =  document.getElementById('page__1');
const  page2 =  document.getElementById('page__2');
page1.style.display = "none";
page2.style.display = "block";
}

function nextnext (){
    const  page2 =  document.getElementById('page__2');
    const  page3 =  document.getElementById('page__3');
    page2.style.display = "none";
    page3.style.display = "flex";
}
