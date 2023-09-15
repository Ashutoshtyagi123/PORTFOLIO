$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleclass('fa-time');
      $('header').toggleclass('toggle');
    });
    $(winddow).on('scroll load',function(){
        $('#menu').toggleclass('fa-time');
        $('header').toggleclass('toggle');

    });
});