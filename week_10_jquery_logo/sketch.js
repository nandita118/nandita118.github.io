$(document).ready(function(){

    $(".cls-2").hover(function(){
        $(this).css("transform", "rotate(360deg)");
        setTimeout(function(){
            $(".cls-2").css("transition", "0s");
            $(".cls-2").css("transform","rotate(0deg)");
            $(".cls-2").css("transition", "1s");
        }, 1000);
    });

    $(".button").click(function(){
        let backgroundColor = $(this).css("background-color");
        $(".cls-2").css("fill", backgroundColor);
    });

    $(document).keypress(function(event){
        if (event.keyCode==32){
            $("html,body").css("background-color", "rgb(36, 36, 36)");
            $(".cls-1").css("fill", "rgb(233, 233, 233)");
        }
        else{
            $("html,body").css("background-color", "rgb(233, 233, 233)");
            $(".cls-1").css("fill", "rgb(36, 36, 36)");
        }
    });


});