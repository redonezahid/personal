/*global $*/

$(function () {
    
    "use strict";


    $(window).on('load', function () {

        $('.mstartLoad').fadeOut('slow');
        
    });


    /*************** Landing ***************/
    $('.intro_full_height').height( $(window).height() * 0.7 );

    var land__text = $(".head_demo");
    
    if ( land__text.length !== 0 ){

        land__text.fitText(1, { maxFontSize: 86 });

    }



});
