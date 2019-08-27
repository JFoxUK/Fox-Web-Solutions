$(document).ready(function(){
    
//Sticky Nav bar
                  
    $(".about-us").waypoint(function(direction){ 
        if (direction == "down"){
            $("nav").addClass("sticky");
            $(".logo").addClass("logo-sticky");
            $(".go-to-top").addClass("on")
            $(".go-to-top").removeClass("hidden")
        } else{
            $("nav").removeClass("sticky");
            $(".logo").removeClass("logo-sticky");
            $(".go-to-top").removeClass("on")
            $(".go-to-top").addClass("hidden")
        }
    }, {
      offset: '60px'
    });
 
//Animated Scroll

    $(".js--scroll-about-us").click(function(){
        $("html, body").animate({scrollTop: $(".about-us").offset().top}, 1000)
    });
    $(".js--scroll-offer").click(function(){
        $("html, body").animate({scrollTop: $(".what-we-offer").offset().top}, 1000) 
    });
    $(".js--scroll-prices").click(function(){
        $("html, body").animate({scrollTop: $(".prices").offset().top}, 1000)
    });
     $(".js--scroll-contact").click(function(){
        $("html, body").animate({scrollTop: $(".form").offset().top}, 1000)
    });
    $(".go-to-top").click(function(){
        $("html, body").animate({scrollTop: $("header").offset().top}, 1000)
    });
    $(".js--wp-1").waypoint(function(direction){
      $(".js--wp-1").addClass("animated fadeIn");  
    }, {
        offset: "80%"
    });
    $(".js--wp-2").waypoint(function(direction){
      $(".js--wp-2").addClass("animated fadeInRight");  
    }, {
        offset: "50%"
    });
    $(".js--wp-3").waypoint(function(direction){
      $(".js--wp-3").addClass("animated pulse");  
    }, {
        offset: "50%"
    });
    $(".message-response").waypoint(function(direction){
      $(".message-response").addClass("slideInDown");  
    }, {
        offset: "50%"
    });
    
//Mobile Nav Bar
    
    $(".js--nav-icon").click(function() {
        let nav = $(".js--main-nav"); 
        let burger = $(".navicon-line")
        let cross = $(".navicon-x")
        nav.slideToggle(200);
        if (burger.hasClass("on")){
            burger.addClass("hidden");
            burger.removeClass("on");
            cross.addClass("on");
            cross.removeClass("hidden");
        }else {
            cross.removeClass("on");
            cross.addClass("hidden");
            burger.addClass("on");
            burger.removeClass("hidden");
        }
    }) 
});
