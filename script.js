// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
// 'use strict'
// const skills = document.getElementById("skills");
// const experience = document.querySelector(".exp");

// const scrollTracking = new ScrollTimeline({

//     scrollOffsets : [{
//         target: skills, edge: "end", threshold: "0"
        
//     },
//     {
//         target: skills, edge: "start", threshold: "1"
//     }
// ],
// });

// const expScroll = new ScrollTimeline({
// scrollOffsets:[{
//     target: experience, edge:"end", threshold:"0"
// }
// ,
// {
//     target: experience, edge:"start", threshold:"30rem"

// }]
// })

// experience.animate({
//     transform:[
//         "scaleX(0)","scaleX(1)"
//     ]
// },
// {
//     duration: 1,
//     timeline: expScroll,
// })

//=====================================sticky navbar======================================//

'use strict'
const section2 = document.querySelector(".experience")
const sec2Coords = section2.getBoundingClientRect()
const nav = document.querySelector(".nav")
const navLi = document.querySelector(".nav ul li a")
window.addEventListener("scroll", function(){
    if(window.scrollY > sec2Coords.top){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
})

//=============================show image while scrolling===============================//

const allSection = document.querySelectorAll(".section")

const revealSection = function(entries, observer){
     const[entry] = entries;
    console.log(entry)
    if(!entry.isIntersecting) return;

    entry.target.classList.remove("sectionhidden")
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(
    revealSection, {
        root:null,
        threshold:.10,

    }
)

allSection.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add("sectionhidden")
})

/////////////////////////////////////FORM///////////////////////////////////////

const form = document.querySelector(".contact-form");
const contactBtn = document.querySelectorAll(".contact-me");
const overlay = document.querySelector(".overlay")

for(let i = 0; i <= contactBtn.length; i++){
    contactBtn[i].addEventListener("click", function(){
        form.classList.toggle("hidden");
        overlay.classList.toggle("hidden")
    })
    overlay.addEventListener("click", function(){
        if (!overlay.classList.contains("hidden")){
            overlay.classList.add("hidden");
            form.classList.add("hidden")
        }
    })
        
}



