
var mainDiv = document.querySelector("#main");
 mainDiv.innerHTML = `
   <button>Nýr Bakgrunnur</button> 
   <div id ="bakgrunnur"></div>`
   var button = document.querySelector("button");
   var bakgrunnur = document.querySelector("#bakgrunnur");
    
   
   var newBackground = function(e){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    bakgrunnur.style.height = "100vh";
    bakgrunnur.style.width = "100vw";
    bakgrunnur.style.backgroundColor = hue;
    
}

button.onclick = newBackground

