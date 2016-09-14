



$(document).ready(function(){


	//navigation 

	$('.burger-btn').click(function(){


		$('.nav-block').animate({left:'0px'});


	});

	$('.cross').click(function(){
		$('.nav-block').animate({left:'-300px'});
	});



	// section3 green block

	$('.doll2').hide();

	$('.doll1').hover(function(){
		$('.doll2').show('slow');
	});

	


	// scroll slide down

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});	


	//about page 

	$('#section4').hide();
	$('.about').click(function(){

		$('#section4').fadeIn('slow');
		

	});




	//section 5 hidden
	$('#section5').hide();
	$('.sec5').click(function(){


		$('#section5').show('slow');

	});


	
	//adding content
	
	$('#section5b').hide();
	
	$('.no-ans').click(function(){
		$('#section5b').show('slow',function(){
			$('#section5').fadeOut(3000,function(){
				$('#section5b').fadeOut(1000);
			});

		});

	});


	$('#openModal').click(function(){
		$('.modal2').css({"display":"block"});
	});

	$('.close').click(function(){
		$('.modal2').css({"display":"none"});
	});






	

});




function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('comment').value == "" || document.getElementById('lastname').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}




