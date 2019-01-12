$(document).ready(function () {
    // focus field

    $(document).on('click', '#field', function (event) {
        $('#field').toggleClass('main__border');
        $('#label').toggleClass('main__color');
    });

    //close script

    //active element

    $(document).on('click', '#Telegram', function (event) {
        $('#telegram-gray').toggleClass('grayscale');
        $('#telegram-dot').toggleClass('dot');
    });

    $(document).on('click', '#ICQ', function (event) {
        $('#icq-gray').toggleClass('grayscale');
        $('#icq-dot').toggleClass('dot');
    });

    $(document).on('click', '#Skype', function (event) {
        $('#skype-gray').toggleClass('grayscale');
        $('#skype-dot').toggleClass('dot');
    });

    $(document).on('click', '#Slack', function (event) {
        $('#slack-gray').toggleClass('grayscale');
        $('#slack-dot').toggleClass('dot');
    });

});