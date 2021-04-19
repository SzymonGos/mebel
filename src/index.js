import '../src/sass/index.sass';
import 'bootstrap/dist/js/bootstrap';
require('bootstrap-icons/font/bootstrap-icons.css');
import $ from 'jquery';
import {showRecommendations} from './tools/recommended'


// switch filter plus/minus icon 
$(document).ready(function () {
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".bi").removeClass("bi-plus").addClass("bi-dash");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".bi").removeClass("bi-dash").addClass("bi-plus");
    });
});




