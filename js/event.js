var swiper = new Swiper(".film_swiper", {
  slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


$(function () {

  // Youtube Video Switcher
    $('.click_forYT').on('click', function (e) {
        e.preventDefault(); 
        const ytUrl = $(this).data('yturl');
        const videoId = getYouTubeVideoId(ytUrl);
        console.log(videoId)
        if (videoId) {
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            $('#display_YT').attr('src', embedUrl);
        }
    });
    function getYouTubeVideoId(url) {
        const regex = /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.)?youtube\.com\/watch\?v=)([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // sec5 switcher

    $('.sec5 .step_btn').click(function(e){
      e.preventDefault(); 
      $(this).addClass('on').siblings().removeClass('on')
      var target=$(this).data('target')
$('.step_list').hide()
      $('.'+target).css('display','flex')
    })

})

