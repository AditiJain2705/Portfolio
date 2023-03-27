// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".container"),
//   smooth: true
// });
(() => {
	const h1El = document.querySelector('#jt');
	const letters = h1El.textContent.split('');
	h1El.innerHTML = letters.map((l, i) => `<p style="--i: ${i}; --j: ${letters.length -1 - i}">${l == ' ' ? '&nbsp;': l}</p>`).join('');
	
	h1El.addEventListener('mouseenter', () => {
	  h1El.classList.add('flip-in');
	  h1El.classList.remove('flip-out');
	});
	
	h1El.addEventListener('mouseleave', () => {
	  h1El.classList.remove('flip-in');
	  h1El.classList.add('flip-out');
	});
  })()
function show(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
show();
var tl = gsap.timeline();
tl
.from(".aboutm>h1",{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.5,
  // stagger:0.5
})
.from(".loader",{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.5,
  // stagger:0.5
})

gsap.from(".skil",{
  x:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page2",
      // markers:true,
      start:"top 90%"
      // end:"top 10%"
  }
})
gsap.from(".desc>h1",{
  x:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page2",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".skillpercent",{
  x:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".desc",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".illustrate",{
  x:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".skillpercent",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".page-div",{
  x:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page3",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".page-desc>h1",{
  x:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page-div",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from("#para",{
  x:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page-div",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".mani",{
  y:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page-div",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".qualification",{
  x:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page4",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})

gsap.from(".college",{
  y:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".qualification",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".grass",{
  x:500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".footer",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})
gsap.from(".laptopwork",{
  y:-500,
  opacity:0,
  scrollTrigger:{
      scroller:".container",
      trigger:".page5",
      // markers:true,
      start:"top 80%"
      // end:"top 10%"
  }
})

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

