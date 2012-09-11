// Functions

// SocialMedia buttons animated
$(document).ready(function() {
    $('#socialmedia li a').hover(function() {
        $(this).stop().animate({ width: '40px' }, 150);
    }, function() {
        	$(this).stop().animate({ width: '70px' }, 300);
    });
});