jQuery(document).ready(function(){

    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scrol:{
            items:1,
            duration:900,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });

    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondry');
        }else if($("header").hasClass('secondry')){
            $("header").removeClass('secondry');
        }
    });
    
    
});
