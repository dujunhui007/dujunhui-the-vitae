//rem
function freshRem() {
    var desW = 750,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px'
}
freshRem();
window.addEventListener('resize', freshRem);



//->音频的自动播放
~function () {
    var audioBox = document.getElementById('audioBox'),
        musicBox = document.getElementById('musicBox'),
        musicImg1=musicBox.getElementsByTagName('img')[0],
        musicImg2=musicBox.getElementsByTagName('img')[1];

    window.setTimeout(function () {
        audioBox.play();
        musicImg1.className = 'music musicMove';
        musicImg1.style.opacity = 1;
    }, 1500);
    musicBox.onclick = function () {
        if (audioBox.paused) {
            audioBox.play();
            musicImg1.className = 'music musicMove';
            musicImg2.style.opacity=1;
        } else {
            audioBox.pause();
            musicImg1.className = 'music';
            musicBox.style.opacity = 1;
            musicImg2.style.opacity=0;
        }
    };
}();


var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides,
            curIndex = swiper.activeIndex,
            total = slides.length,
            targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += total - 2;
                break;
            case total - 1:
                targetId += 1;
                break;
            default:
                targetId += curIndex
        }
        [].forEach.call(slides, function (item, index) {
            //判断滑块是不是当前屏如何是 动态添加id值 其他屏的id为null
            if (index == curIndex) {
                item.id = targetId
            } else {
                item.id = null
            }
        })
    }
});