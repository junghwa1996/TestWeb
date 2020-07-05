$(function(){
    searchopen();
});

function searchopen(){
    $('.search_ico').click(function(){
        $('.search input[type="text"]').toggleClass('open');
    });
    $('.All_view').click(function(){
        $('.All_Menu').toggleClass('All_open');
    });
}
// search ico 클릭시 검색란 오픈