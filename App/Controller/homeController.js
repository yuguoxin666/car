/**
 * Created by yuguo on 2017/10/20.
 */
app.controller("homepage",function($scope,$timeout){
    $timeout(new Swiper('.swiper-container', {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination'
    }),1000)
});