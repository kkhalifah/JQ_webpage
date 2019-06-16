$(document).ready(function(){
    //preloader
    $('.preloader').fadeOut();
   
    //nav-btn
    $('.nav-btn').click(function(){
        $('.nav').toggleClass('nav-show')
    });
    
    // video slider
    $('.video-btn-container').click(function(){
        const value = $('.video-switch-btn').hasClass('btn-slide')
        if(value) {
            $('.video-switch-btn').removeClass('btn-slide')
            $('#video').get(0).play()
            
        } else {
            $('.video-switch-btn').addClass('btn-slide')
            $('#video').get(0).pause()
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});