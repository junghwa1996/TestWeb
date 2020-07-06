$(function(){
    searchopen();
    navFixed();
});

function searchopen(){
    $('.search_ico').click(function(){
        $('.search input[type="text"]').toggleClass('open');
    });
}
// search ico 클릭시 검색란 오픈




function navFixed(){
    var nav = $('.header_Wrap').height();
    $(window).scroll(function(){
        if($(this).scrollTop() > nav){
            $('.Fixd_Nav').addClass('fixed');
        }else{
            $('.Fixd_Nav').removeClass('fixed');
        }
    });
}
