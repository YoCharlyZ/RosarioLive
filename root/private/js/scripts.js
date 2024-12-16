

// Precarga de la pagina
$(window).on("load", function () {
    $(".preloader").fadeOut("slow");
    $('body').removeClass('hidden');
});

//document.getElementById("only_link").addEventListener("click", function(){alert("que crees que vas a encontrar ahi?)")})
// Menu
(function () {
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav_link--show');
    });

})();

$(document).ready(function(){
    $('#only_link').on("click", function(){
      $('#myView').toggle('slow');
      alert("que crees que vas a encontrar ahi?)")
      });
    });
$(document).ready(function(){
    $('#cafecito_link').on("click", function(){
      $('#myView').toggle('slow');
      alert("que crees que vas a encontrar ahi?)")
      });
    });

// Selector
$(document).ready(function () {

    $('#selection').on('change', function () {
        change($(this).val());
    });

});

function change(sourceUrl) {
    var audio = document.getElementById("player");
    var source = document.getElementById("mp3_src");

    if (sourceUrl) {
        audioEl.src = sourceUrl;
    }
}

let select = document.querySelector('select');

select.addEventListener('focus', () => {
    select.size = 3;
    select.classList.add('fadeIn');
    select.classList.remove('fadeOut');
    select.style.backgroundColor = 'rgb(158, 158, 158)';
});

select.addEventListener('blur', () => {
    select.size = 1;
    select.classList.add('fadeOut');
    select.classList.remove('fadeIn');
    select.style.backgroundColor = 'rgb(158, 158, 158)';
});

select.addEventListener('change', () => {
    select.size = 1;
    select.blur();
    select.style.backgroundColor = 'rgb(158, 158, 158)';
});

select.addEventListener('mouseover', () => {
    if (select.size == 1) {
        select.style.backgroundColor = 'rgb(247, 247, 247)';
    }
});
select.addEventListener('mouseout', () => {
    if (select.size == 1) {
        select.style.backgroundColor = 'rgb(158, 158, 158)';
    }
});

// Player
import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer';
//import AudioMotionAnalyzer from '../src/audioMotion-analyzer.js';
// audio source
var audioEl = document.getElementById('audio');
// instantiate analyzer
var audioMotion = new AudioMotionAnalyzer(
    document.getElementById('container'),
    {
        source: audioEl,
        height: window.innerHeight - 50,
        // you can set other options below - check the docs!
        mode: 5,
        channelLayout: 'dual-combined',
        frequencyScale: 'log',
        gradient: 'prism',
        alphaBars: true,
        ansiBands: true,
        outlineBars: true,
        ledBars: true,
        linearAmplitude: true,
        lumiBars: true,
        overlay: true,
        outlineBars: true,
        peakLine: true,
        radial: true,
        reflexFit: true,
        roundBars: true,
        showBgColor: true,
        showPeaks: true,
        showScaleX: false,
        showScaleY: false,
        splitGradient: true,
        start: true,
        trueLeds: true,
        useCanvas: true,
        bgAlpha: .0,
        barSpace: 0.1,
        fillAlpha: .5,
        linearBoost: 1.8,
        lineWidth: 1.5,
        maxDecibels: -30,
        maxFreq: 16000,
        minDecibels: -85,
        minFreq: 50,
        reflexAlpha: 1,
        reflexBright: 1,
        reflexRatio: 0,
        smoothing: 0.5,
        spinSpeed: 2,
        volume: 1,
        weightingFilter: 'D'

    }
);

// Play Pause Stream
let mainCover = document.querySelector("#main_cover");

mainCover.addEventListener("click", () => {

    if (mainCover.classList.contains("active")) {
        mainCover.classList.remove("active");
        mainCover.classList.add("inactive");
        //audioEl.src = 'https://stream.zeno.fm/ts5hbqzteixvv';
        audioEl.pause();
    }
    else {
        mainCover.classList.remove("inactive");
        mainCover.classList.add("active");
        //audioEl.src = 'https://stream.zeno.fm/ts5hbqzteixvv';
        audioEl.play();
    }
});

var posts = document.querySelectorAll(".p_img .nav_social .selection_container .preloader body");

imagesLoaded(posts, function () {
    document.querySelector("#cover").classList.add("loaded");
});

// Script Chat

