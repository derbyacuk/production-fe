import $ from 'jquery'
import lightgallery from 'lightgallery'
import '../../../node_modules/lg-video/dist/lg-video.min.js'

$('.media-gallery-images').lightGallery({
    download: false,
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
});


