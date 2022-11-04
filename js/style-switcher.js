// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// console.log(styleSwitcherToggle);

// styleSwitcherToggle.addEventListener("click",() =>  {
//     document.querySelector(".style-switcher").classList.toggle("open");
// }) 


// // hide styling

// window.addEventListener("scroll" ,() =>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open")
//     }
// })



// theme light and dark

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
     dayNight.querySelector("i").classList.add("fa-sun");
     dayNight.querySelector("i").classList.add("fa-moon");
     document.body.classList.toggle("dark");
})
window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
         dayNight.querySelector("i").classList.add("fa-moon");
    }
})
