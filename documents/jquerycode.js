document.ready($(function()
{
	$('#selfie').hover(function()
	{
		$('#selfie').attr('src', '../images/selfie2.jpg');
	}),
	$('#selfie').mouseout(function()
	{
		$('#selfie').attr('src', '../images/selfie.jpg');
	});
}));
