$(document).ready(function () {
    //Desktop Menu Dropdown
    var menuLinkDropdown = $('.header-nav .link-dropdown');
    menuLinkDropdown.on('click', function () {
        var self = $(this);
        var menuListDropdown = self.find('.menu-dropdown');
        
        self.toggleClass('active');
        menuListDropdown.toggleClass('active');
    });

    //Header fixed scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.page-header').addClass('is-fixed');
        } else {
            $('.page-header').removeClass('is-fixed');
        }
    });

    //Mobile Sidebar Menu
    $('.header-actions .icon-bar').on('click', function () {
        $('.nav-mobile').addClass('is_show');
    });

    $('.nav-mobile .icon-close').on('click', function () {
        $('.nav-mobile').removeClass('is_show');
    });

    //Block Search Header
    $('.header-actions .icon-search').on('click', function () {
        $('.page-header .form-search').addClass('is_show');
    });

    $('.page-header .form-search .icon-close').on('click', function () {
        $('.page-header .form-search').removeClass('is_show');
    });

    //Time Opening Contact Page
    $('.time-opening-today').click(() => {
        $('.time-opening-today').hide();
        $('.time-opening-list').show();
    });

    $('.time-opening-list .monday').click(() => {
        $('.time-opening-today').show();
        $('.time-opening-list').hide();
    });

    //Form Order Contact Page
    $('.contact-order .btn-close-form-order').click(function() {
        $(this).parent().hide();
        $('.contact-order .btn-open-form-order').show();
    });

    $('.contact-order .btn-open-form-order').click(function() {
        $(this).hide();
        $(this).parent().find('.form-order').show();
    });
});