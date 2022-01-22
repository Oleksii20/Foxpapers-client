$( document ).ready(function() {

    //MENU OPEN
    $("#hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass("is-active");
        if($(this).hasClass("is-active")){
            $('.header__menu').addClass('header__menu-active');
            $('body').addClass('menu-open');
        } else {
            $('.header__menu').removeClass('header__menu-active');
            $('body').removeClass('menu-open');
        }
    });
});