$(function(){
    MainSlider();
    BannerSlide();
});

function MainSlider(){
    $('.Main_slider').bxSlider({
        speed:'300',
        auto:'true'
    });
}
function BannerSlide(){
    $('.BannerSlide').bxSlider({
        speed:'300',
        auto:'true'
    });
}