var btn = document.getElementById('btn')
var home = document.getElementById('home')
var sendmess = document.getElementById('sendmess')

const colors = ["red", "blue", "orange", "yellow", "pink"];
var colorl = "white"

function onBtnClick(){
    /*alert("Button clicked!")*/
    let index = Math.floor(Math.random() * colors.length)
    home.style.backgroundColor = colors[index]
    about.style.backgroundColor = colors[index]
}
function sendMessage(){
    alert("Data sent!")


}
btn.onclick = onBtnClick
sendmess.onclick = sendMessage
logol.onclick = lightTheme

function lightTheme() {
        var element = document.body;
        element.classList.toggle("light-theme");
        document.getElementById("logol").childNodes[0].nodeValue=
   "New Button Text using childNodes";
}
function darkTheme() {
    var element = document.body;
    element.classList.toggle("light-theme");
}

