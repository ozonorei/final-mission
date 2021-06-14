$(document).ready(function () {
    
    $('.open').click(function (e) { 
        
        $('.zhezhao').fadeToggle();
    });

    $('.close').click(function (e) { 

        $('.zhezhao').fadeOut();
    });

    $('.shopping-bar label').click(function (e) { 
        
        $('.zhezhao').fadeToggle();
        $('.zhezhao').toggleClass('active');
    });

    $('.shopping-bar-close').click(function (e) { 

            $('.zhezhao').this().fadeOut();
    });
});

