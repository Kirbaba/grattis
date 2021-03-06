jQuery(document).ready(function($) {
    //  Activate the tooltips   
    $('[rel="tooltip"]').tooltip();
    if (jQuery('#chart').length > 0) {
        Chart.defaults.global.animationEasing = 'easeInOutQuad',
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.scaleOverride = true;
        Chart.defaults.global.scaleShowLabels = false;
        Chart.defaults.global.scaleSteps = 5;
        Chart.defaults.global.scaleStepWidth = 5;
        Chart.defaults.global.scaleStartValue = 0;
        Chart.defaults.global.tooltipFillColor = '#FFFFFF';
        Chart.defaults.global.tooltipFontColor = '#dfdfdf';
        Chart.defaults.global.tooltipCaretSize = 0;

        Chart.defaults.Line.scaleShowVerticalLines = false;
        Chart.defaults.Line.scaleShowHorizontalLines = true;
        Chart.defaults.Line.scaleGridLineColor = '#dfdfdf';
        Chart.defaults.Line.scaleLineColor = '#dfdfdf';

        var chart = document.getElementById('chart').getContext('2d'),
            gradient = chart.createLinearGradient(0, 0, 0, 450);
        chart.canvas.height = 80;

        var data = {
            labels: ['', '10.02', '11.02', '12.02', '13.02', '14.02', '15.02', '16.02', '17.02', '18.02', '19.02'],

            datasets: [{
                label: 'Custom Label Name',
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [8, 6, 5, 8, 8, 5, 5, 8, 6, 5, 4]
            }]
        };

        var op = {
            bezierCurve: true,
        }

        var chart = new Chart(chart).Line(data, op);


    }

    $(document).on('click', '.js-vetrina--option--btn', function() {  
      $(this).parent().parent().detach().appendTo('.js-vetrina-menu');
      $(this).removeClass('pull-right');
      $(this).removeClass('js-vetrina--option--btn').addClass('js-vetrina-menu--btn');
      $(this).find("i").removeClass('fa-long-arrow-right').addClass('fa-long-arrow-left');      
      $(this).parent().parent().prepend($(this).parent());

    });

    $(document).on('click', '.js-vetrina-menu--btn', function() {  
      $(this).parent().parent().detach().appendTo('.js-vetrina--option');
      $(this).removeClass('js-vetrina-menu--btn').addClass('js-vetrina--option--btn');
      $(this).addClass('pull-right');      
      $(this).find("i").removeClass('fa-long-arrow-left').addClass('fa-long-arrow-right');
      $(this).parent().parent().append($(this).parent());
    });

    $('.dropdown-menu a').click(function() {
        $(this).closest('.dropdown').find('span.sreamnumber').text($(this).attr('data-value'));
    });
    $('.dropdown-menu a').click(function() {
        $(this).closest('.btn-group').find('span.sreamnumber').text($(this).attr('data-value'));
    });

    $('.remove-btn').click(function() {
        var domain_name = $(this).parent().parent().find('.domain--name').text();
        $('#domain--name').text(domain_name);
    });

    $("#checkAll").change(function() {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
        var checked_count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (checked_count < 2) {
            $('.mass_actions').hide();
        } else {
            $('.mass_actions').css("display", "inline-block");
        }
    });



    if ($('.dropdown-cust').hasClass('open')) {
        $('.wrapper').css('margin-top', '40px');
    } else {
        $('.wrapper').css('margin-top', '0');
    }

    $('.dropdown-cust').on('click', function() {
        if ($(this).hasClass('open')) {
            $('.wrapper').css('margin-top', '0');
        } else {
            $('.wrapper').css('margin-top', '40px');
        }
    });

    $(function() {
        $('.footable').footable({
            breakpoints: {
                tiny: 100,
                medium: 555,
                big: 2048
            }
        });
    });

    $('table').bind('footable_breakpoint', function() {
        $('table').trigger('footable_expand_first_row');
    });

    $('input').keypress(function(e) {
        var is_shift_pressed = false;
        if (e.shiftKey) {
            is_shift_pressed = e.shiftKey;
        } else if (e.modifiers) {
            is_shift_pressed = !!(e.modifiers & 4);
        }
        if (((e.which >= 65 && e.which <= 90) && !is_shift_pressed) || ((e.which >= 97 && e.which <= 122) && is_shift_pressed)) {
            $('#enter-password').focus();
            $("#capswarn").show();
        } else {
            $("#capswarn").hide();
        }

    });

    $("#enter-password").focus(function() {
        $(".enter-form--help").show()
    });
    $("#enter-password").focusout(function() {
        $(".enter-form--help").hide()
    });

    $("#enter-password").focus(function() {
        $(".showPass--enter").show()
    });
    $("#enter-password").focusout(function() {
        $(".showPass--enter").hide()
    });
    $("#enter-password").focus(function() {
        $(".dropped-lable").css({
            transform: 'translateY(0)',
            opacity: 1
        })
    });
    $("#enter-password").focusout(function() {
        $(".dropped-lable").css({
            transform: 'translateY(100%)',
            opacity: 0
        })
    });

});

$('.getCode--show').click(function() {
    $('.modal-title').text('Подтвердите ваш номер телефона');
    var phone_vall = $('.js__phone--input').val();
    console.log(phone_vall);
    $('.js__phone').text(phone_vall);
});

$('.js-profile--pyment').click(function() {
    $('.modal-title').text('Подтвердите изменение WMR-кошелька');
    var phone_vall = $('.js__phone--input').val();
    console.log(phone_vall);
    $('.js__phone').text(phone_vall);
});

$('.js-phone--confirmed').click(function() {
    $('.js-phone').css("display", "none");
    var phone_vall = $('.js__phone').text()
    $('.js-phone--added .well').text(phone_vall);
    $('.js-phone--added').css("display", "block");
})

$('.getCode--show, js-getCode--again, .js-profile--pyment').on('click', function() {
    if ($('.getCode--counter').length) {
        var seconds = 45;
        window.setId = setInterval(function() {
            if (seconds > 0) {
                seconds--;
                $('.getCode--counter').text(setMinutesAndSeconds(seconds));
            } else {
                $('.getCode--counter').hide();
                $(".js-getCode--again").attr("href", "#nowhere");
            }
        }, 1000);
    }
    console.log(window.setId);
});

$('.js-show_payment-timer').on('click', function() {
    if ($('.js__payment-count').length) {
        var seconds = 99;
        window.setId = setInterval(function() {
            if (seconds > 0) {
                seconds--;
                $('.js__payment-count').text(setSeconds(seconds));
            }
        }, 1000);
    }
    console.log(window.setId);
});


$('.modal__write--btn').on('click', function() {
    $('.modal__write--form--inp').each(function() {
        if ($(this).val() != 0) {
            $('.modal__write--preloader').show();
            $('.modal__write--btn').addClass('modal__write--btn--active').text("Отправляю...");

            setTimeout(function() {
                $('.js__modal__write--type').hide();
                $('.js__modal__write--success').show();
            }, 2000);
        }
    });

});



$('.js-modal--close').on('click', function() {  
  clearInterval(window.setId);
  $('.getCode--counter').text('0:45'); 
  $('#getCode').modal('hide');
});






function setMinutesAndSeconds(seconds) {
  var minutes = Math.floor(seconds / 60),
      seconds = seconds - (minutes * 60);  
  seconds = (seconds >= 10) ? seconds : ("0" + seconds);
  return minutes + ':' + seconds;
}

function setSeconds(seconds) {
  var seconds = seconds;  
  seconds = (seconds >= 10) ? seconds : ("0" + seconds);
  return  seconds;
}

  (function () {
         lightbox.option({
            'showImageNumberLabel': false,
            'wrapAround': true
         });
  })(jQuery);


$('.table--check').change(function () {
    var checked_count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checked_count < 2) {
        $('.mass_actions').hide();
    } else {
      $('.mass_actions').css("display","inline-block");
    }
    console.log(checked_count);
});

$( "#showPass" )
  .click(function() {
    if ($("#enter-password").attr('type') == 'password') {
      console.log('true');
      $("#enter-password").attr('type','text');
    } else {
      $("#enter-password").attr('type','password');
    }    
  });

 (function(){
      $(window).load(function(){
          $(".scrolltext").mCustomScrollbar({
              theme:"inset-dark"
          });
      });
  })(jQuery);
   
$('.new-section--more').on("click", function() {
    event.preventDefault();
    $('.new-section__options').toggle();
  });
   
$('.btn--font').on("click", function() {
    event.preventDefault();
    $(this).toggleClass("active");
  });

$('.btn-switch').click(function() { 
    $(this).parent().children().each(function() {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});


$('input[name="check"').on("change", function() {
    if($(this).val()=="yours") {
        if($(this).attr('checked', true)) {
            $('.new-section__design--open').show();
        } else {
            $('.new-section__design--open').hide();
        }
    } else {
        $('.new-section__design--open').hide();
    }   
    
});

$('input[name="menu__optionsRadios"').on("change", function() {
    if($(this).val()=="option2") {
        if($(this).attr('checked', true)) {
            $('.menu__constructor').show();
        } else {
            $('.menu__constructor').hide();
        }
    } else {
        $('.menu__constructor').hide();
    }   
    
});

$('input[name="congratulations_sheet"').on("change", function() {
    if($(this).val()=="option2") {
        if($(this).attr('checked', true)) {
            $('.id--list').show();
        } else {
            $('.id--list').hide();
        }
    } else {
        $('.id--list').hide();
    }   
    
  });


$('.js__show--browsing').on("click", function() {
    event.preventDefault();
    $('.new-section__browsing').toggle();
  });


 


