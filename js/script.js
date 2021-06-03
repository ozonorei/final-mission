$(document).ready(function() {
    $('.shopping').on('click',  function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});