$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
           
           $("#trailer-video-container").empty();
       });
      
       $(document).on('click', '.movie-tile', function (event) {
           var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
           var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
           $("#trailer-video-container").empty().append($("<iframe></iframe>", {
             'id': 'trailer-video',
             'type': 'text-html',
             'src': sourceUrl,
             'frameborder': 0
           }));
       });
    
       $(document).ready(function () {
         $('.movie-tile').hide().first().show("fast", function showNext() {
           $(this).next("div").show("fast", showNext);
         });
       });
