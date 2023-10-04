function speak(text) {
	var msg = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(msg);
}

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