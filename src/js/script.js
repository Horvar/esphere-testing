import $ from 'jquery';

$(document).ready(function(){


    //label vertival
    $('#setVert input[type=radio]').change(function() {
        $('.timeline').toggleClass('label-bottom');
    });
    //label horizontal
    $('#setHor input[type=radio]').change(function() {
        $('.timeline').toggleClass('label-spot');
    });

    //add step
    $('#setAdd #add').click(function() {
        if ( $('.timeline__step-item').length >= 10 ) {
            alert('Достигнуто максимальное количество чек-поинтов')
        } else {
            $('.timeline__step-item:last').clone().appendTo('.timeline__step-list').removeClass('current');
        }
    });
    //remove step
    $('#setAdd #del').click(function() {
        if ( $('.timeline__step-item').length <= 2 ) {
            alert('Достигнуто минимальное количество чек-поинтов')
        } else {


            if ( $('.timeline__step-item.current').index() == $('.timeline__step-item').length-1 ) {
                console.log('1');
                $('.timeline__step-item.current').removeClass('.current');
                $('.timeline__step-item:last').remove();
                $('.timeline__step-item:last').addClass('current');
            } else {
                $('.timeline__step-item:last').remove();
            }


        }

    });

});

//select current
$(document).on('click', '.timeline__step-label p', function() {
    $('.timeline__step-item').removeClass('current');
    $(this).parents('.timeline__step-item').toggleClass('current');
});