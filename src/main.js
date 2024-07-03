$(document).ready(function () {
    var menuLinkDropdown = $('.header-nav .link-dropdown');
    menuLinkDropdown.on('click', function () {
        var self = $(this);
        var menuListDropdown = self.find('.menu-dropdown');
        
        self.toggleClass('active');
        menuListDropdown.toggleClass('active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.page-header').addClass('is-fixed');
        } else {
            $('.page-header').removeClass('is-fixed');
        }
    });

    $('.header-actions .icon-bar').on('click', function () {
        $('.nav-mobile').addClass('is_show');
    });

    $('.nav-mobile .icon-close').on('click', function () {
        $('.nav-mobile').removeClass('is_show');
    });
});