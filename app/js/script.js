
$(function() {

    $('.profile-page_header_mobile a').click(function(){
        if($('.profile-page_header_mobile_menu').hasClass('show')) {
            $('.profile-page_header_mobile_menu').removeClass('show')
        } else {
            $('.profile-page_header_mobile_menu').addClass('show')
        }
    })

    $('.profile-page_header_mobile_menu a').click(function(){
            $('.profile-page_header_mobile_menu').removeClass('show')
    })

    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            $('.profile-page_header').addClass('onscroll')
        } else {
            $('.profile-page_header').removeClass('onscroll')
        }
    })

    $(window).scroll(function () {
        if($(window).scrollTop() >= 0 && $(window).scrollTop() < 900) {
            $('.profile-page_header_menu a').removeClass('active');
            $('.header_link--info').addClass('active');
        } 
        if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 1240) {
            $('.profile-page_header_menu a').removeClass('active');
            $('.header_link--exp').addClass('active');
        }
        if ($(window).scrollTop() >= 1240 && $(window).scrollTop() < 1450) {
            $('.profile-page_header_menu a').removeClass('active');
            $('.header_link--js').addClass('active');
        }
        if ($(window).scrollTop() >= 1450) {
            $('.profile-page_header_menu a').removeClass('active');
            $('.header_link--about').addClass('active');
        }
    })

    var sliderWidth = 25;
    var sledeVal = $('#myRange').val()
    var sliderPosition = (sliderWidth/100)*sledeVal - 12.5;
    var newRule = "<style>.slider::-webkit-slider-thumb{ left: "+ sliderPosition +"px; }</style>"
    $(newRule).appendTo('head');

    $('.slidecontainer-val').css('width', "calc(100% - " + $('#myRange').val() + "%");
    $(document).on('input', '#myRange', function() {
        $('.slidecontainer-val').css('width', "calc(100% - " + $('#myRange').val() + "%");
        sledeVal = $(this).val()
        var sliderPosition = (sliderWidth/100)*sledeVal - 12.5;
        newRule = "<style>.slider::-webkit-slider-thumb{ left: "+ sliderPosition +"px; }</style>"
        $('style').remove();
        $(newRule).appendTo('head');
    });

    $('.my-info_input--name').val('Фирстов Василий Владимирович');
    $('.my-info_input--city').val('Чебоксары');
    $('.my-info_input--skype').val('xruzelx1')
    $('.my-info_input--email').val('xruzelx@gmail.com')
    

    //if($('.my-info_input input').val() !== '')
    
    if($('.my-info_input input').val() !== '') {
        $('.my-info_input input').addClass('not-empty');
    } 

    $('.section_body_textarea textarea').val('Привлекла интересными проектами, возможностью развития, именно развития в профессиональном плане и ожидаю от вакансии.') 
    
    if($('.section_body_textarea textarea').val() !== '') {
        $('.section_body_textarea textarea').addClass('not-empty');
    } 

    $('.my-info_input input').keyup(function(){
        if($(this).val() !== '') {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    })

    $('.section_body_textarea textarea').keyup(function(){
        if($(this).val() !== '') {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    })


    var dropdowns = $(".dropdown");

    dropdowns.find(".dropdown_title").click(function(){
        $(this).next().children().toggle();
        if(!dropdowns.hasClass('opened')) {
            dropdowns.addClass('opened')
        } else {
            dropdowns.removeClass('opened')
        }
    });

    dropdowns.find(".dropdown_list ul li a").click(function(){
        var leSpan = $(this).parents(".dropdown").find(".dropdown_title a span");
        $(this).parents(".dropdown").find('.dropdown_list a').each(function(){
        $(this).removeClass('selected');
    });
        leSpan.html($(this).html());
        if($(this).hasClass('default')){
        leSpan.removeClass('selected')
    }
        else{
            leSpan.addClass('selected');
            $(this).addClass('selected');
        }
        $(this).parents("ul").hide();
        dropdowns.removeClass('opened');
    });
    $(document).bind('click', function(e){
        if (! $(e.target).parents().hasClass("dropdown")) {
            $(".dropdown .dropdown_list ul").hide();  
            dropdowns.removeClass('opened');
        } 
    });
});