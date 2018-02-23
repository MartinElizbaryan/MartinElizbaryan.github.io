$(document).ready(function(){
	var audio = $('<audio></audio')
	console.log("audio", audio);
	$('body').append(audio[0])
	audio[0].src = 'mp3/France_1.m4a'
	// audio[0].src = 'mp3/English_1.m4a'
	audio[0].loop = false
	audio[0].play()
})