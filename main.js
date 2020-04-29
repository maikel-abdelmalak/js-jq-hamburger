//visualizzare l'hamburger menu su mobile

//prima versione
// $('.header-right > a').click(function(){
//     $('.hamburger-menu').show();
// })
//
//
// $('.close').click(function(){
//     $('.hamburger-menu').hide();
// })



//seconda versione
$('.header-right > a').click(function(){
    $('.hamburger-menu').fadeIn(2000);
})


$('.close').click(function(){
    $('.hamburger-menu').fadeOut();
})
