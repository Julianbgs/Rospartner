$(document).ready(function () {
    // focus field

    $(document).on('click', '#field', function (event) {
        $('#field').toggleClass('main__border');
        $('#label').toggleClass('main__color');
    });
});