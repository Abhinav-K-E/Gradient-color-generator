var css = document.querySelector("h3");

var color01 = document.querySelector(".color1");
var color02 = document.querySelector(".color2");

let bgColor = document.getElementsByClassName("wrapper")[0];

var code = document.getElementById("cssCode");

color01.addEventListener("input",function(){
    bgColor.style.background = "linear-gradient(to right , "+ color01.value +" , "+ color02.value +")";

    code.innerHTML = bgColor.style.backgroundImage;
})

color02.addEventListener("input",function(){
    bgColor.style.background = "linear-gradient( to right , "+ color01.value +" , "+ color02.value+")"
    code.innerHTML = bgColor.style.backgroundImage;
})

// for copying text

function copyText(){
    navigator.clipboard.writeText(code.innerHTML);
}








