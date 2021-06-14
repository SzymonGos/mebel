import '../src/sass/index.sass';
import 'bootstrap/dist/js/bootstrap';
require('bootstrap-icons/font/bootstrap-icons.css');
import $ from 'jquery';
import {showRecommendationsInit} from './tools/recommended';
import {signMeOutInit} from './tools/signOutAlert';
import {productsFilter} from './tools/productsFilter'


$(document).ready(function () {

    signMeOutInit();
    showRecommendationsInit();
    productsFilter();
});




