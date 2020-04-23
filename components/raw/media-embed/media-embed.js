import $ from 'jquery'
import lightgallery from 'lightgallery'
import '../../../node_modules/lg-video/dist/lg-video.min.js'

$('.media-embed').each(function(){

    $(this).lightGallery({
        selector: '.media-embed-a',
        download: false,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        getCaptionFromTitleOrAlt: false,
        iframeMaxWidth: $('.media-embed-a', $(this)).attr('data-attr-iframe-max-width')
    });
});