/* Array portfolio section ----------------------------------------------------------- */
let portfolioArray = [
    /* 1 ------------------------ */
        {
            img: "project images/try.jpg",
            title: "Weather App",
            description: "Get the weather details of any city using the OpenWeatherMap API.",
             live:"https://curious-cendol-97c847.netlify.app/",
              classadd:"Interacting"
        },/* 2 ------------------------ */
        {
            img: "project images/Calculate Age.png",
            title: "Calculate Age",
            description: "This age Calculate app will display the exact age in years, months and days.",
            live:"https://roaring-medovik-bb444b.netlify.app/",
             classadd:"Product"
        },/* 3 ------------------------ */
        {
            img: "project images/Calculator.jpeg",
            title: "Calculator",
            description: "A simple calculator built using HTML, CSS, and JavaScript.",
             live:"https://deft-cobbler-ab2f5a.netlify.app/",
             classadd:"WebApp"
        },/* 4 ------------------------ */
        {
            img: "project images/mcqs,enter.png",
            title: "Mcqs-Enter-With-Text-Area",
            description: "I have a textarea . say (*).",
             live:"https://mcqs-textarea.netlify.app/",
              classadd:"Product"
        },/* 5 ------------------------ */
        {
            img: "project images/post-page-assigement.avif",
            title: "post-page-assigement",
            description: "displays all your site's posts and automatically updates each time you publish a new post.",
            live:"https://post-page-assigement.netlify.app/",
             classadd:"Product"
        },/* 6 ------------------------ */
        {
            img: "project images/Login Page.png",
            title: "Login Page",
            description: "Login page created with HTML, CSS, JavaScript.",
             live:"https://friendly-biscotti-908acb.netlify.app/",
             classadd:"Interacting"
        },/* 7 ------------------------ */
        {
            img: "project images/try.jpg",
            title: "Beginneres Portfolio Website",
            description: "Please Visit This.",
             live:"https://idyllic-gumdrop-eea2c2.netlify.app/",
              classadd:"WebApp"
        },/* 8 ------------------------ */
        {
            img: "project images/Fighting-Animation-Game.jpg",
            title: "Fighting-Animation-Game",
            description: " A technique that changes the character's pose",
             live:"https://fighting-animation-game.netlify.app/",
              classadd:"Product"
        },/* 9 ------------------------ */
        {
            img: "project images/StopWatch.jpg",
            title: "StopWatch",
            description: "A simple stopwatch with start, stop, and reset functionality.",
             live:"https://sweet-axolotl-afae77.netlify.app/",
              classadd:"Product"
        },/* 10 ------------------------ */
        {
            img: "project images/cars-searching.jpg",
            title: "Cars-searching",
            description: "Toyota remains the most searched car brand worldwide.",
             live:"https://cars-searching-07.netlify.app/",
              classadd:"Product"
        },/* 11 ------------------------ */
    
    
    
    ];
    
    let portfolioGallery = document.querySelector(".portfolio-gallery")
    
    
    portfolioArray.forEach((v,i)=>{
    
        portfolioGallery.innerHTML += `  <div class="port-box mix ${v.classadd}">
                        <div class="port-image">
                            <img src="${v.img}" alt="">
                        </div>
                        <div class="port-content">
                            <h3>${v.title}</h3>
                            <p>${v.description}</p>
                            <a href="${v.live}">Live</a>
                        </div>
                    </div>`
    
    })
    
    
    
    
    
    
    
    
    
    /* mix it up portfolio section ---------------------------------------------------------*/
    
    var mixer = mixitup(".portfolio-gallery");
    
       
    /* button explore section ---------------------------------------------------------*/
    
    
    let btnexplore = document.getElementById("btnexplore");
    btnexplore.innerText = `Go Back`
    btnexplore.style.color = "red";
    
    let go = () => {
    
        window.location.href = "index.html#portfolio"
    }
    
    /* footer section ---------------------------------------------------------*/
    
    let footer = document.querySelector("footer");
    
    
    
       let foooterHide = ()=>{
        footer.style.display = "none";
      }
      let foooterShow = ()=>{
        footer.style.display = "block";
        footer.style.display='flex'
      }
    
    
    
    
    
    
    