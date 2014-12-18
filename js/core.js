$( document ).ready(function() {
    $('#chat_container').html('<iframe src="http://www.twitch.tv/admiralbulldog/chat?popout=" frameborder="0" scrolling="no" height="100%" width="350"></iframe>');
});

function toggle() {
	$('#chat_container').toggle();
}
