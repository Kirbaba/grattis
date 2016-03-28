    //  Activate the tooltips   
    $('[rel="tooltip"]').tooltip();

Chart.defaults.global.animationEasing        = 'easeInOutQuad',
Chart.defaults.global.responsive             = true;
Chart.defaults.global.scaleOverride          = true;
Chart.defaults.global.scaleShowLabels        = false;
Chart.defaults.global.scaleSteps             = 5;
Chart.defaults.global.scaleStepWidth         = 10;
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
          	//data: [80,65, 59, 80, 81, 56, 55,81, 56, 55, 44]
        }
    ]
};

var op = {
  bezierCurve:true,
}

var chart = new Chart(chart).Line(data, op);