import '../css/style.less';

$(function() {
    $('i').tap(function() {
        var thiz = $(this);
        if (thiz.hasClass('arrow-down')) {
            thiz.removeClass('arrow-down');
            thiz.parent().next().removeClass('show');
        } else {
            thiz.addClass('arrow-down');
            thiz.parent().next().addClass('show');
        }
    });
});