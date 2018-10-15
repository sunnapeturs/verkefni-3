var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
<ul class="list"></ul>
Name <input id="name" type="text" />
Phone <input id="phone" type="text" />
<button>Samtals</button>`

var button = document.querySelector("button");
var name = document.querySelector("#name");
var phone = document.querySelector("#phone");
var list = document.querySelector(".list");

var utkoma = function(){
    list.innerHTML += getEvent(name.value, phone.value);
}
button.onclick = utkoma;
var getEvent = function(name, phone){
    var lokautkoma =
    `<div>
    <p> nafn þitt er ${name} og símanúmer þitt er ${phone}</p>
    </div
    `
return lokautkoma
 

}
