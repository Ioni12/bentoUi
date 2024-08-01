gsap.registerPlugin(ScrollTrigger);

if(typeof gsap === "undefined")
{
    console.error("there was an error with gsap");
}
else{
    console.log("it is working");
}
const initialAnimation = gsap.from(".item", {
    scale: 800,
    duration: 2,
    opacity: 0,
    ease: "power4"
});

let count = 0;
let targets = document.querySelectorAll(".slides");
gsap.set(targets, { xPercent: 100 });
gsap.set(targets[0], { xPercent: 0 });

function slide() {
    let nextCount = (count + 1) % targets.length;
    
    gsap.to(targets[count], {
        duration: 2, 
        xPercent: -100, 
        zIndex: 0
    });
    
    gsap.fromTo(targets[nextCount], 
        { xPercent: 100, zIndex: 10 }, 
        { duration: 2, xPercent: 0, zIndex: 0 }
    );
    
    count = nextCount;
}

function startSlideShow() {
    slide();     
    setInterval(slide, 5000); 
}



window.addEventListener("load", () => {
    initialAnimation.then(() => {
        setTimeout(startSlideShow, 1000); 
    });
})