$(document).ready(function(){
   
    // example-1
    $('.alert_old').click(function(){
        alert("Welcome to jQuery Examples");
    });

    // example-2
    $('.alert_new').on('click', function(){
        alert("Welcome to Examples of jQuery Concepts ");
    });

    // example-3
    $('#hide_btn').on('click', function(){
        $('#hide_text').hide();
    });

    // example-4
    $('#hide_btn_dbl').on('dblclick', function(){
        $('#hide_text_dbl').hide();
    });

    // example-5
    $('#hide_btn_mouseover').on('mouseover', function(){
        $('#hide_text_mouseover').hide();
    });

    // example-6
    $('#hide_show_btn').on('click', function(){
        $('#show_text').hide();
    });

    $('#show_btn').on('click', function(){
        $('#show_text').show();
    });

    // example-7
    $('#hide_show_btn_dbl').on('click', function(){
        $('#show_text_dbl').hide();
    });

    $('#show_btn_dbl').on('dblclick', function(){
        $('#show_text_dbl').show();
    });

    // example-8
    $('#hide_show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').hide();
    });

    $('#show_btn_mouseover').on('mouseover', function(){
        $('#show_text_mouseover').show();
    });

     // example-9
     $('#toggle_btn').on('click', function(){
        $('#toggle_text').toggle();
    });

    // example-10
    $('#toggle_btn_dbl').on('dblclick', function(){
        $('#toggle_text_dbl').toggle();
    });

    // example-11
    $('#toggle_btn_mouseover').on('mouseover', function(){
        $('#toggle_text_mouseover').toggle();
    });

    // example-12
    $("#fadeIn_btn").on("click", function(){
         $('#fadeIn').fadeIn();
    });

    // example-13
    $("#fadeInFast_btn").on("click", function(){
        $("#fadeInFast").fadeIn('fast');
    });

    // example-14
    $("#fadeInSlow_btn").on("click", function(){
        $("#fadeInSlow").fadeIn("slow");
    });

    // example-15
    $("#fadeInMilliSeconds_btn").on("click", function(){
        $("#fadeInMilliSeconds").fadeIn(5000);
    });

    // example-16
    $("#fadeOut_btn").on("click", function(){
    $('#fadeOut').fadeOut();
    });

    // example-17
    $("#fadeOutFast_btn").on("click", function(){
        $("#fadeOutFast").fadeOut('fast');
    });

    // example-18
    $("#fadeOutSlow_btn").on("click", function(){
        $("#fadeOutSlow").fadeOut("slow");
    });

    // example-19
    $("#fadeOutMilliSeconds_btn").on("click", function(){
        $("#fadeOutMilliSeconds").fadeOut(5000);
    });

    // example-20
    $("#fadeToggle_btn").on("click", function(){
         $('#fadeToggle').fadeToggle();
    });

    // example-21
    $("#fadeToggleFast_btn").on("click", function(){
        $("#fadeToggleFast").fadeToggle('fast');
    });

    // example-22
    $("#fadeToggleSlow_btn").on("click", function(){
        $("#fadeToggleSlow").fadeToggle("slow");
    });

    // example-23
    $("#fadeToggleMilliSeconds_btn").on("click", function(){
        $("#fadeToggleMilliSeconds").fadeToggle(5000);
    });

    // example-24
    $("#fadeTo_btn1").on('click', function(){
        $('#fadeTo1').fadeTo('slow', 0.25);
    });

    // example-25
    $("#fadeTo_btn2").on('click', function(){
        $('#fadeTo2').fadeTo('slow', 0.50);
    });

    // example-26
    $("#fadeTo_btn3").on('click', function(){
        $('#fadeTo3').fadeTo('slow', 0.75);
    });

    // example-27
    $("#slide_down_click").on('click', function(){
        $("#slide_down_panel").slideDown();
    });

    // example-28
    $("#slide_down_slow_click").on('click', function(){
        $("#slide_down_slow_panel").slideDown('slow');
    });

    // example-29
    $("#slide_down_fast_click").on('click', function(){
        $("#slide_down_fast_panel").slideDown('fast');
    });

    // example-30
    $("#slide_down_milliseconds_click").on('click', function(){
        $("#slide_down_milliseconds_panel").slideDown(6000);
    });

    // example-30
    $('#slide_up_slow_click').on('click', function(){
        $('#slide_up_slow_panel').slideUp('slow');
    });

    // example-31
    $('#slide_toggle_slow_click').on('click', function(){
        $('#slide_toggle_slow_panel').slideToggle('slow');
    });

    // example-32
    $('.animate_single_property_btn').on('click', function(){
        $('.animate_single_property').animate({left: '1000px'});
    });

    // example-33
    $('.animate_multiple_properties_btn').on('click', function(){
        $('.animate_multiple_properties').animate(
            {left: '800px',
             height: '50px',
             width: '50px',
             opacity: '0.25'
            }
        );
    });

    // example-34
    $('.animate_relativeValue_properties_btn').on('click', function(){
        $('.animate_relativeValue_properties').animate(
            {left: '500px',
             height: '+=100px',
             width: '+=150px',
            }
        );
    });

    // example-35
    $('.animate_toggleValue_properties_btn').on('click', function(){
        $('.animate_toggleValue_properties').animate(
            {height: 'toggle'
            }
        );
    });

    // example-36
    $('.multiple_animate_btn').on('click', function(){
        var div = $('.multiple_animate');
        div.animate({height: '200px', opacity: '0.4'}, 'slow');
        div.animate({width: '200px', opacity: '0.8'}, 'slow');
        div.animate({width: '50px', opacity: '0.4'}, 'slow');
        div.animate({height: '50px', opacity: '0.8'}, 'slow');
    });

    // example-37
    $('.multiple_animate_withText_btn').on('click', function(){
        var div = $('.multiple_animate_withText');
       div.animate({left: '200px', width: '200px'}, 'slow');
       div.animate({fontSize: '50px'}, 'slow');
        
    });

    // example-38
    $('.chaining_btn').on('click', function(){
        $('.chaining_text').css('color', 'red').slideUp(2000).slideDown(2000);
    })

  

  


})