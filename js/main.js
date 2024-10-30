console.info("Hello from the file");
document.getElementById("myHeading").innerHTML = "Georgia Silla";
document.querySelector("nav ul li").setAttribute('class', 'currentPage');
// document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i <colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", changeColour);
}

function changeColour(ev){
    console.info(ev.target.classList[0]);
    let colourClass = ev.target.classList[0]+"Back";
    document.body.setAttribute("class",colourClass);
    if (defaultBtn) {
        let defaultBt
        document.body.removeAttribute("class");
    }
    // let defaultBtn = ev.target.classList[0]+"reset";
    // document.body.removeAttribute("class");
}
document.getElementById("myTestBtn").addEventListener("click",function(){
    console.info('Hi, I was clicked')
});

// document.getElementsByClassName('')

// let redBtn = document.querySelector(".red")
// redBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "redBack");
// });

// let blueBtn = document.querySelector(".blue")
// blueBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "blueBack");
// });

// let greenBtn = document.querySelector(".green")
// greenBtn.addEventListener("click", function(){
//     document.body.setAttribute("class", "greenBack");
// });

// let defaultBtn = document.querySelector(".reset")
// defaultBtn.addEventListener("click", function(){
//     document.body.removeAttribute("class");
// });

