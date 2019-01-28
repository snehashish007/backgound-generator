var css = document.querySelector('h3'),
	color1 = document.querySelector('.color1'),
	color2 = document.querySelector('.color2'),
	body = document.getElementById('gradient'),
	randomBtn = document.getElementById('randomBtn'),
	leftBtn = document.getElementById('leftBtn'),
	rightBtn = document.getElementById('rightBtn');

// Set background colors
function setColors(color1, color2) {
	body.style.background = 'linear-gradient(to right, ' 
		+ color1 
		+ ', ' 
		+ color2 
		+ ')';

	css.textContent = body.style.background + ';';
}

function setGradient() {
	setColors(color1.value, color2.value);
}

function getRandomColor() {
	var letters = '0123456789abcdef';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


// Display the initial CSS linear gradient property on page load
setGradient() ;

// Set up event handlers for body background colors picking
[color1, color2].forEach(function(col) {col.addEventListener('input', setGradient)});

// -------EVENT LISTENERS FOR BUTTONS---------

// Get random colors for entire body background
randomBtn.addEventListener('click', function() {
	setColors(getRandomColor(), getRandomColor());
});

// Get random colors for left side of the screen
leftBtn.addEventListener('click', function() {
	setColors(getRandomColor(), color2.value);
});

// Get random colors for right side of the screen
rightBtn.addEventListener('click', function() {
	setColors(color1.value, getRandomColor());
});



