function speak(text) {
	var msg = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(msg);
}

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();

	// Check if text is selected
	if (window.getSelection().toString().trim() !== "") {
		// Display the custom context menu
		const menu = document.getElementById("customContextMenu");
		menu.style.display = "block";
		menu.style.left = `${e.pageX}px`;
		menu.style.top = `${e.pageY}px`;
	}
});

document.addEventListener("click", function (e) {
	// Hide the custom context menu
	const menu = document.getElementById("customContextMenu");
	menu.style.display = "none";
});

function translateText() {
	const selectedText = window.getSelection().toString();
	console.log(`Translating: ${selectedText}`);
	// Implement your translation logic here
}

function explainText() {
	const selectedText = window.getSelection().toString();
	console.log(`Explaining: ${selectedText}`);
	// Implement your explanation logic here
}

document.addEventListener('selectionchange', function() {
		const selectedText = window.getSelection().toString().trim();
		const words = document.querySelectorAll('.word');

		if (selectedText !== '') {
				// Disable hover effect
				words.forEach(word => {
						word.classList.add('no-hover');
				});
		} else {
				// Enable hover effect
				words.forEach(word => {
						word.classList.remove('no-hover');
				});
		}
});