$(document).ready(function(){
    $(document).on('click', '.show-row', function(){
        var row = $(this).parent().parent();
        if(row.hasClass('dropdown-row-close')){
            row.addClass('dropdown-row-open');
            row.removeClass('dropdown-row-close');
            $('.dropdown-row-child').each(function(){
                if($(this).attr('data-parent-row') == row.attr('id')){
                    $(this).removeClass('dropdown-row-child');
                    //$(this).slideDown();
                }
            });
        }
        else {
            row.addClass('dropdown-row-close');
            row.removeClass('dropdown-row-open');
            $('.dropdown-row').each(function(){
                if($(this).attr('data-parent-row') == row.attr('id')){
                    $(this).addClass('dropdown-row-child');
                }
            });
        }

        return false;
    });

    $(".sortable").tablesorter({
        
    });
});
