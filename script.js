var btn = document.getElementById('btn')
var home = document.getElementById('home')
var sendmess = document.getElementById('sendmess')

const colors = ["red", "blue", "orange", "yellow", "pink"];

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

function changeWebsiteColors() {
	var button = document.querySelector('.my-button');
	button.classList.toggle('active');
	
	if (button.classList.contains('active')) {
		document.body.style.color = '#fff';
		
		var divs = document.querySelectorAll('#nav-header');
		var sections = document.querySelectorAll('section');
        var foot = document.querySelectorAll('#nav-footer');
		
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.backgroundColor = 'rgb(15, 4, 61)';
		}
		
		for (var i = 0; i < sections.length; i++) {
			sections[i].style.backgroundColor = 'rgb(2, 51, 2)';
		}
        for (var i = 0; i < foot.length; i++) {
			foot[i].style.backgroundColor = 'rgb(15, 4, 61)';
            foot[i].style.color = '#fff';
		}
	} 
    else {
		document.body.style.color = '#000';
		
		var divs = document.querySelectorAll('#nav-header');
		var sections = document.querySelectorAll('section');
        var foot = document.querySelectorAll('#nav-footer');
		
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.backgroundColor = '#f8f9fa';
		}
		
		for (var i = 0; i < sections.length; i++) {
			sections[i].style.backgroundColor = '#f8f9fa';
		}
        for (var i = 0; i < foot.length; i++) {
			foot[i].style.backgroundColor = '#f8f9fa';
            foot[i].style.color =  '#000';
        }
	}
}

