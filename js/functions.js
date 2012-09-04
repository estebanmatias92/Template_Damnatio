// E-mable functions

// Menu Bar current function
/*$(document).ready(function(){
    var url_complete = location.href; //URL de la pagina actual
    var url_start = url_complete.lastIndexOf("/");
    var current_page = url_complete.slice(url_start+1); // Extraemos el nombre de la pagina
    $("nav ul li a[href='"+ current_page +"']").addClass("active"); //Asignamos la clase llamada "activo"
});*/

$(document).ready(function(){
	var path = location.pathname.substring(1);
	if ( path )
		$('nav ul li a[href$="' + path + '"]').attr('class', 'nav ul li a.active');
		$('nav ul li a[href$="' + path + '"]').hover(function(){
			$(this).addclass("nav ul li a.active");
		});
});

//NivoSlider ThumbNails effect
/*$(document).ready(function(){
	$("#slider article a img").fadeTo("slow", 0.3);
	$("#slider article a img").hover(function(){
		$(this).fadeTo("slow", 1.0);
	},function(){
			$(this).fadeTo("slow", 0.3);
	});
});*/

// SocialMedia buttons animated
$(document).ready(function() {
    $('#socialmedia li a').hover(function() {
        $(this).stop().animate({ width: '35px' }, 150);
    }, function() {
        	$(this).stop().animate({ width: '70px' }, 300);
    });
});