
    $(".button-collapse").sideNav();

    // $(document).click(function() {
    // 	$('.side-nav').hide();
    // });


    $(document).ready(function(){
      $('.slider').slider({
      	full_width: true,
      	height: 500
      });
    });
     



    $(document).ready(function(){
      $('.parallax').parallax();
    });
    

      $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });



$(document).ready(function(){
    $('.hidden').slideDown("fast");
});