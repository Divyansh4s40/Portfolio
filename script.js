function valueSetter(){
    gsap.set("#nav a", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set("#home span .child", {
    y: "100%",
  });
  gsap.set("#home .Center1 img", {opacity:0})
  
   document.querySelectorAll("#Visual path, #Visual polyline").forEach(function (el) {
    const length = el.getTotalLength();
    el.style.strokeDasharray = length + "px";
    el.style.strokeDashoffset = length + "px";
  });

}


function revealTospan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;

    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    duration: 1.5,
    stagger: 0.2,
    ease: Power3.easeInOut,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration:1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: 0,
      top: 0,
      duration: 1,
      delay: -0.1,
      ease: Circ.easeInOut,
      onComplete: function(){
       animateHomepage();
      }
    });
}

function animateSvg() {
  // Select all paths and polylines inside #Visual
 
  // Animate all at once
  gsap.to("#Visual path, #Visual polyline", {
    strokeDashoffset: 0,
    duration: 5,
    ease: "expo.inOut",
  });
}

// Wait for the entire page (including SVG) to load

function animateHomepage() {
  // Fix: Separate the two gsap.set() calls
 
var tl = gsap.timeline();

  tl
  .to("#nav a", {
    y:0,
    opacity: 1,
    stagger: .05,
    ease: Expo.easeInOut
  })
   .to("#home .parent .child", {
    y:0,
    stagger: .1,
    duration:1,
    delay:4,
    ease: Expo.easeInOut
  })
   .to("#home .Center1 img", {
    opacity: 1,
    ease: Expo.easeInOut,
    onComplete:function(){
     animateSvg();
    }
  })


}

// Call all functions in order
revealTospan();
valueSetter();
loaderAnimation();
animateHomepage();


