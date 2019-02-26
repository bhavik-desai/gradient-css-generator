var gradient = window.document.getElementById("gradient");
var color1="#df9823";
var color2="#00f3d2";


var colorpicker1=document.getElementById("color1");
var colorpicker2=document.getElementById("color2");
var colorValue1=document.getElementById("colorValue1");
var colorValue2=document.getElementById("colorValue2");
colorpicker1.value=color1;
colorpicker2.value=color2;
colorValue1.value=color1;
colorValue2.value=color2;
setBackground();


colorpicker1.addEventListener("input",updateGradientColors)
colorpicker2.addEventListener("input",updateGradientColors)

function updateGradientColors(){
    color1=colorpicker1.value;
    color2=colorpicker2.value;
    colorValue1.value=color1;
    colorValue2.value=color2;
    setBackground();
}

function setBackground(){
    gradient.style.background = "linear-gradient(to right," + color1 + "," + color2 + ")";
    var gradientValue=document.getElementById("gradientValue");
    gradientValue.value="linear-gradient(to right," + color1 + "," + color2 + ")";
}


