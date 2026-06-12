

gsap.registerPlugin(ScrollTrigger);

gsap.to(".nina",{duration:3, x:260, y:100, ease:"elastic", stagger:0.01});

gsap.to(".st8",{transformOrigin:"100% 50%"});

gsap.fromTo(".st2, #ZapatoIzq, #ZapatoDer",{duration:2, fill:"#EA94B7"},{duration:2, fill:"#560563", repeat:-1, yoyo:true});

gsap.to("#princesa",{duration:4, x:10, y:10, ease:"elastic"});

gsap.to("#castillo",{
    scrollTrigger:{
        trigger:"#castillo",
        start:"top center",
        toggleActions:"restart pause reverse pause"
    },
    duration:4,
    y:-100,
    x:300});
gsap.to("#ventanas",{duration:0.5,stagge:0.01, x:1,y:1,repeat:-1,yoyo:true});
gsap.fromTo(".ventanaCastillo",{duration:2,fill:"#EA94B7"},{duration:2,fill:"#fff",repeat:-1, yoyo:true})

gsap.to("#nubes",{duration:60, x:200, y:-8,repeat:-1,yoyo:true});

//animación de los ojos
let tlojos = gsap.timeline({repeat:-1,yoyo:true}) //que se repita el timeline
    tlojos.to("#ojosprincesa",{opacity:1,duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:1,duration: 0.2})
    tlojos.to("#ojosprincesa", { opacity: 0, duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:0,duration: 0.07})
    tlojos.to("#ojosprincesa",{opacity:1,duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:1,duration: 4})
    tlojos.to("#ojosprincesa", { opacity: 0, duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:0,duration: 0.07})
    tlojos.to("#ojosprincesa",{opacity:1,duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:1,duration: 3})
    tlojos.to("#ojosprincesa", { opacity: 0, duration: 0.001})
    tlojos.to("#ojosprincesa",{opacity:0,duration: 2})
    ;


gsap.to(".pelo2",{duration:1, x:-2, y:0.5,repeat:-1,yoyo:true,opacity: 0.7,rotation:2,repeatDelay:3});

gsap.to(".mejillad, .mejillai",{duration:3,repeat:-1,yoyo:true,opacity: 0.2});


gsap.to("#princesa2",{duration:1, x:8, y:0, stagger:1, repeat:-1, yoyo:true, repeatDelay:1});
gsap.to("#princesa2",{duration:2,scale:1.07,yoyo:true,repeat:-1,repeatDelay:4})

gsap.to("#boca",{duration:1,rotation: 0,x:-1, y:-1,scale:1.1, repeat:-1, yoyo:true,repeatDelay:3})

gsap.to(".st47,.st52",{duration:0.5,rotation: 0.2,x:2, y:0, repeat:-1, yoyo:true,repeat:-1,yoyo:true,repeatDelay:4})


//abejas

gsap.set("#abeja1, #abeja2",{scale:0.14})
gsap.fromTo("#abeja1",{ x:-300,y:-30},{duration:19, x:900, y:100, repeat:-1,repeatDelay:7})//abeja acostada
gsap.fromTo("#abeja2",{ x:-400, y:-20, ease:"rough"},{scale:0.2, x:700, y:20, repeat:-1,duration:20,repeatDelay:13})//abeja parada




gsap.registerPlugin(ScrollToPlugin);
    
    // --- RED PANEL ---
    gsap.from(".line-1", {
      scrollTrigger: {
        trigger: ".line-1",
        scrub: true,
        start: "top bottom",
        end: "top top"
      },
      scaleX: 0,
      transformOrigin: "left center", 
      ease: "none"
    });
    
    
    // --- ORANGE PANEL ---
    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      },
      scaleX: 0, 
      transformOrigin: "left center", 
      ease: "none"
    });
    
    
    // --- PURPLE/GREEN PANEL ---
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".purple",
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=100%",
        }
      });
    
    tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
      .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
      .to(".purple", {backgroundColor: "#000"}, 0);
    
    
    let links = gsap.utils.toArray("nav a");
    links.forEach(a => {
      let element = document.querySelector(a.getAttribute("href")),
          linkST = ScrollTrigger.create({
                trigger: element,
                start: "top top"
              });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => self.isActive && setActive(a)
      });
      a.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
      });
    });
    
    function setActive(link) {
      links.forEach(el => el.classList.remove("active"));
      link.classList.add("active");
    }