function DataBinding() {
    var li_html = "";
    $.each(dataItem, function (i) {
        li_html += dataItem[i].Value;
    });

    console.log(li_html);
    
    $('#ul_source').append(li_html);
    $('#ul_saveItem').append(li_html);
}

function RecheckSelectItemName() {
    $('#ul_saveItem').each(function () {
        var phrase = '';
        $(this).find('li').each(function (i) {
            $(this).attr('name', 'tb_' + (i + 1));
        });
    });

    $('#ul_source').each(function () {
        var phrase = '';
        $(this).find('li').each(function () {
            $(this).removeAttr("name")
        });
    });
}

    // $(function () {

    //     DataBinding();

    //     $('#btnAppend').bind('click', function () {
    //         // DataBinding();
    //     });

    //     $('body').on('click', '.list-group .list-group-item', function () {
    //         $(this).toggleClass('active');
    //     });
    //     $('.list-arrows button').click(function () {
    //         var $button = $(this), actives = '';
    //         if ($button.hasClass('move-left')) {
    //             actives = $('.list-right ul li.active');
    //             actives.clone().appendTo('.list-left ul');
    //             actives.remove();
    //         } else if ($button.hasClass('move-right')) {
    //             actives = $('.list-left ul li.active');
    //             actives.clone().appendTo('.list-right ul');
    //             actives.remove();
    //         }

    //         RecheckSelectItemName();

    //         return false;
    //     });
    //     $('.dual-list .selector').click(function () {
    //        var $checkBox = $(this);
    //        if (!$checkBox.hasClass('selected')) {
    //            $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
    //            $checkBox.children('i').removeClass('glyphicon-unchecked').addClass('glyphicon-check');
    //        } else {
    //            $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
    //            $checkBox.children('i').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
    //        }
    //     });
    //     $('[name="SearchDualList"]').keyup(function (e) {
    //        var code = e.keyCode || e.which;
    //        if (code == '9') return;
    //        if (code == '27') $(this).val(null);
    //        var $rows = $(this).closest('.dual-list').find('.list-group li');
    //        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    //        $rows.show().filter(function () {
    //            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    //            return !~text.indexOf(val);
    //        }).hide();
    //     });

    // });