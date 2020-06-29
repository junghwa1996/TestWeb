$(function(){
    fadeLeft();
    fadeRight();
    twis();
    clickE();
    fadeBottom();
});




function fadeLeft(){
    var h = $(window).height()/1.5;

    var real = $('.real');
    var realOST = real.offset().top - h;

    var way = $('.general_01');
    var wayOST = way.offset().top - h;

    var gen = $('.general_02');
    var genOST = gen.offset().top - h;

    
    $(window).scroll(function(){
        var Sthis = $(this).scrollTop(); 
        
        if(Sthis > realOST){
        real.find('.realctn > div').addClass('animate_left');
        }

        if(Sthis > wayOST){
            $('.general_01_ico > img').each(function(idx){
                var THIS =  $(this);
                setTimeout(function(){THIS.addClass('animate_left');},100*idx);
            });
        }

        if(Sthis > genOST){
            $('.general_02_ico > img').each(function(idx){
                var THIS =  $(this);
                setTimeout(function(){THIS.addClass('animate_left');},200*idx);
            });
        }
    });

}
// fadeLeft


function fadeRight(){
    var h = $(window).height()/1.5;
    var spac = $('.spacewrap');
    var spacOST = spac.offset().top - h;
    
    $(window).scroll(function(){
        var Sthis = $(this).scrollTop(); 
        
        if(Sthis > spacOST){
        spac.find('h2').addClass('animate_right');
        }
    });

}

// fadeRight


function fadeBottom(){
    var h = $(window).height()/1.5;
    var uplus = $('.logo');
    var uplusOST = uplus.offset().top - h;
    
    $(window).scroll(function(){
        var Sthis = $(this).scrollTop(); 
        
        if(Sthis > uplusOST){
            uplus.find('img').addClass('animate_bottom');
        }
    });

}

// fadebottom

function twis(){
    var h = $(window).height()/1.5;
    var item = $('.itemwrap');
    var itemOST = item.offset().top - h;

    var del = $('.deliveryico');
    var delOST = del.offset().top - h;
    
    $(window).scroll(function(){
        var Sthis = $(this).scrollTop(); 
        
        if(Sthis > itemOST){
        item.find('img').addClass('animate_twis');
        }
        
        if(Sthis > delOST){
            del.find('div').addClass('animate_twis');
            }
    });

}

// move twis

function clickE(){
    $('.itemwrap > img').click(function(){
        var where = $('.form').offset().top;
        $('html,body').stop().animate({scrollTop:where},500);
    });
}

// 클릭시 form 으로 이동