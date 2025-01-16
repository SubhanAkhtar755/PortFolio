/*  change text section */


let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1 ;

};

changeText();
setInterval(changeText,3000)

/* circle skills  */

const circles = document.querySelectorAll(".circle")
circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots");
     var marked = elem.getAttribute("data-percent");
     var percent = Math.floor(dots*marked/100);
     var points = "";
     var rotate = 360 / dots;
     for(var i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
     }

elem.innerHTML = points;

const pointsMarked = elem.querySelectorAll(".points");
for(let i = 0 ; i<percent ; i++){
    pointsMarked[i].classList.add("marked")
}

});

/* mix it up portfolio section */
var mixer = mixitup(".portfolio-gallery");



let go = ()=>{
window.location.href = "exploreprojects.html"

}
// <!-- header section -->

document.addEventListener('scroll' , ()=>{
    let menuIcon = document.querySelector("#menu-icon");
    let headfixed = document.getElementById("headfixed");
  
    if (window.scrollY > 85) {
        headfixed.classList.add("navjs");
      menuIcon.classList.add("menu-icon");
    }else{
        headfixed.classList.remove("navjs")
        menuIcon.classList.remove("menu-icon")
    }
  })
  // <!-- navbar section -->
const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky" , window.scrollY > 50)
});

  // <!-- navbar section ------------------------------------->

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

/*  parallax --------------------------- */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }  else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop= document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

/*  contact form --------------------------- */
// let contactform = ()=>{
// if(true){
//     Swal.fire({
//         title: "Contact Page Not Working",
//         text: "Please Contact On Whatsapp And Others Social Media Platforms!",
//         icon: "info"
//       });
// }
// }


let contactform = ()=>{
    let alertswal = Swal.fire({
        title: "Contact Page Not Working",
        text: "Please Contact On Number , Whatsapp And Other Social Media Platforms!",
        icon: "info"
      });
   contactform1 = alertswal === true ?  alertswal : alertswal;
    };

let hireme = ()=>{

let hireswal = Swal.fire("If any company hires me, they must contact me on WhatsApp or other social media accounts!");


    hireme1 = hireswal === true ? hireswal : hireswal ;
}

let cv = ()=>{

    let cvswal = Swal.fire("This feature is UnAvailable!");
    
    
        cv1 = cvswal === true ? cvswal : cvswal ;
    }