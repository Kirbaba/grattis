jQuery(document).ready(function($) {
    //  Activate the tooltips   
    $('[rel="tooltip"]').tooltip();
if (jQuery('#chart').length > 0) {
  Chart.defaults.global.animationEasing        = 'easeInOutQuad',
  Chart.defaults.global.responsive             = true;
  Chart.defaults.global.scaleOverride          = true;
  Chart.defaults.global.scaleShowLabels        = false;
  Chart.defaults.global.scaleSteps             = 5;
  Chart.defaults.global.scaleStepWidth         = 5;
  Chart.defaults.global.scaleStartValue        = 0;
  Chart.defaults.global.tooltipFillColor       = '#FFFFFF';
  Chart.defaults.global.tooltipFontColor       = '#dfdfdf';
  Chart.defaults.global.tooltipCaretSize       = 0;

  Chart.defaults.Line.scaleShowVerticalLines = false;
  Chart.defaults.Line.scaleShowHorizontalLines = true;
  Chart.defaults.Line.scaleGridLineColor       = '#dfdfdf';
  Chart.defaults.Line.scaleLineColor           = '#dfdfdf';

  var chart    = document.getElementById('chart').getContext('2d'),
      gradient = chart.createLinearGradient(0, 0, 0, 450);

  var data  = {
      labels: [ '', '10.02', '11.02', '12.02', '13.02', '14.02', '15.02', '16.02', '17.02', '18.02', '19.02' ],
    
      datasets: [
          {
            label: 'Custom Label Name',
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)", 
            data: [8,6, 5, 8, 8, 5, 5,8, 6, 5, 4]
          }
      ]
  };

  var op = {
    bezierCurve:true,
  }

  var chart = new Chart(chart).Line(data, op);


}



  $('.dropdown-menu a').click(function() {
    $(this).closest('.dropdown').find('span.sreamnumber').text($(this).attr('data-value'));
  });
  $('.dropdown-menu a').click(function() {
    $(this).closest('.btn-group').find('span.sreamnumber').text($(this).attr('data-value'));
  });

  $('.remove-btn').click(function(){
    var domain_name = $(this).parent().parent().find('.domain--name').text();
    $('#domain--name').text(domain_name);
  });

  $("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
  });

});

  (function () {
         lightbox.option({
            'showImageNumberLabel': false,
            'wrapAround': true
         });
  })(jQuery);
   


