function run(){

    let me = {
    name: "David Rayy",
    sclass: "VI",
    rollno: "12",
    };
    
    let properties = [];
    for (let i in me) {
    properties.push(i);
    }

    document.getElementById("output").innerHTML = properties;
}

// style

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text', {y: "0%", duration: 1, stagger: 0.30});
tl.to('.slider',{y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro',{y:"-100%", duration:1}, "-=1");
tl.fromTo('nav',{opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('article',{opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text',{opacity: 0}, {opacity: 1, duration: 1}, '-=1');

// create another page

document.querySelector('#redirect')
.addEventListener('click', () =>{
    window.location.href = 'test'
});