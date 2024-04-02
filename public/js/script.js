// function init() {
//     gsap.registerPlugin(ScrollTrigger);


//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(".main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();

// }

// init()

// var crsr = document.querySelector(".cursor")
// var main = document.querySelector(".main")
// document.addEventListener("mousemove", function () {
//     crsr.style.left = dets.x + 20 + "px"
//     crsr.style.top = dets.y + 20 + "px"
// })

// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         start: "top 30%",
//         end: "top 0",
//         scrub: 3
//     }
// })

// tl.to(".page1 h1", {
//     x: -100,
// }, "anim")

// tl.to(".page1 h2", {
//     x: 100
// }, "anim")

// tl.to(".page1 video", {
//     width: "90%"
// }, "anim")



// var tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         start: "top -115%",
//         end: "top -130",
//         scrub: 3
//     }
// })

// tl2.to(".main", {
//     backgroundColor: "#fff"
// })

// var tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page1 h1",
//         scroller: ".main",
//         start: "top -400%",
//         end: "top -450",
//         scrub: 3
//     }
// })

// tl3.to(".main", {
//     backgroundColor: "#0f0d0d"
// })

// var boxes = document.querySelectorAll(".box")
// boxes.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         var att = elem.getAttribute("data-image")
//         crsr.style.width = "400px"
//         crsr.style.height = "400px"
//         crsr.style.borderRadius = "0"
//         crsr.style.backgroundImage = `url(${att})`
//     })
//     elem.addEventListener("mouseleave", function () {
//         elem.style.backgroundColor = "transparent"
//         crsr.style.width = "20px"
//         crsr.style.height = "20px"
//         crsr.style.borderRadius = "50%"
//         crsr.style.backgroundImage = `none`
//     })
// })


// var h4 = document.querySelectorAll(".nav h4")
// document.querySelector("#purple")
// h4.forEach(function (elem) {
//     elem.addEventListener("mouseenter", function () {
//         purple.style.display = "block"
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave", function () {
//         purple.style.display = "none"
//         purple.style.opacity = "0"
//     })
// })



// Initialize function
function init() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    // Proxy ScrollTrigger to Locomotive Scroll
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

// Initialize the page
init();

// Cursor movement
var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (event) {
    crsr.style.left = event.clientX + 20 + "px";
    crsr.style.top = event.clientY + 20 + "px";
});

// Scroll-triggered animations
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 30%",
        end: "top 0",
        scrub: 0.5 // Adjusted scrub value
    }
});

tl.to(".page1 h1", { x: -100 }, "anim");
tl.to(".page1 h2", { x: 100 }, "anim");
tl.to(".page1 video", { width: "90%" }, "anim");

// Background color change on scroll
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end: "top -130%",
        scrub: 0.5 // Adjusted scrub value
    }
});

tl2.to(".main", { backgroundColor: "#fff" });

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -400%",
        end: "top -450%",
        scrub: 0.5 // Adjusted scrub value
    }
});

tl3.to(".main", { backgroundColor: "#0f0d0d" });


var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image");
        crsr.style.width = "400px";
        crsr.style.height = "400px";
        crsr.style.borderRadius = "0";
        crsr.style.backgroundImage = `url(${att})`; // Fixed typo
    });
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent";
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = `none`; // Fixed typo
    });
});


// Marquee function
function updateMarquee(text) {
    // Concatenate the text multiple times
    var repeatedText = (text + ' ').repeat(100); // Repeat 5 times, adjust as needed
    document.getElementById("marquee-text").innerText = repeatedText;
}

var h4 = document.querySelectorAll(".nav h4");
var purple = document.querySelector("#purple");

h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "flex"; // Change display to flex
        purple.style.opacity = "1";
        updateMarquee(elem.textContent.trim());
    });
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none";
        purple.style.opacity = "0";
    });
});








