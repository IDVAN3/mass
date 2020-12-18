/*script*/
'use strict'
$(document).ready(function () {


    /*el-select*/
    const ITEM_SELECT = $('.js-select-item');
    const CLASS_SELECT = 'select_active';

    $(document).on('click', '.js-select-main', function () {
        let ths = $(this);
        let clos = ths.closest('.js-select');

        if (!clos.hasClass(CLASS_SELECT)) {
            clos.addClass(CLASS_SELECT);
            clos.find('.js-content-select').slideDown(300);
        } else {
            clos.removeClass(CLASS_SELECT);
            clos.find('.js-content-select').slideUp(300);
        }
    });

    function closeSelect(select) {
        select.removeClass(CLASS_SELECT);
        $('.js-content-select').slideUp(300);
    }

    $(document).on('click', '.js-select-item', function () {
        let ths = $(this);
        let clos = ths.closest('.js-select');

        clos.find('.js-select-item').removeClass('active');
        ths.addClass('active');

        let thisTrext = ths.text();
        clos.find('.js-select-text').text(thisTrext);

        closeSelect(clos);
    });

    /*показать скрыть фильтр*/
    $('.js-show-filter').click(function (e) {
        e.preventDefault();
        let ths = $(this);
        let atr = ths.attr('data-filter');

        if (!ths.hasClass('active')) {
            ths.addClass('active');
            $('.js-row-filter[data-filter="' + atr + '"]').slideDown(300);
            $('.main-screen__content').css('max-width', '100%');
        } else {
            ths.removeClass('active');
            $('.js-row-filter[data-filter="' + atr + '"]').slideUp(0);
            $('.main-screen__content').css('max-width', '735px');
        }
    });


    /*фиксация шапки*/
    const HEADER = $('.header');

    function headerFixed(sctoll) {
        let h_header = HEADER.outerHeight();

        if (h_header < sctoll) {
            HEADER.addClass('scroll');
        } else {
            HEADER.removeClass('scroll');
        }

    }

    /*слайдер*/
    $('.js-slider-model').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__btn-prev'),
        nextArrow: $('.slider__btn-next'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                }
            }
            ]
    });

    $('.sparay__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.slider-catalog').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                rows: 1,
            }
        }
        ]
    });


    /*скрыть показать категории*/
    const ITEM_CAT = $('.js-item-cat');
    const BTN_SHOW_CAT = $('.js-btn-show-cat');

    BTN_SHOW_CAT.click(function (e) {
        e.preventDefault();
        let ths = $(this);
        let clos = ths.closest('.js-div');

        if (!ths.hasClass('active')) {
            ths.addClass('active');
            clos.find('.js-item-cat').slideDown(300);
        } else {
            clos.find('.js-item-cat').slideUp(300);
            ths.removeClass('active');
        }
    });


    /*Переключение контента табами*/
    const TABS_ITEM = $('.tabs__item');
    const DIV_ITEM = $('.js-div');

    TABS_ITEM.click(function (e) {
        e.preventDefault();
        let ths = $(this);
        let atr = ths.attr('data-index-tab');

        if (!ths.hasClass('active')) {
            TABS_ITEM.removeClass('active');
            ths.addClass('active');
            DIV_ITEM.fadeOut(10);
            $('.js-div[data-div="' + atr + '"]').fadeIn(10);
        }
    })


    /*добавить блок*/
    const ADD_SLOT = $('.js-add-slot');
    const SLOT = $('.js-slot');

    ADD_SLOT.click(function (e) {
        e.preventDefault();
        SLOT.after(SLOT.clone());
    });


    /*добавить блок*/
    const btnCont = $('.js-add-btn-ad');
    const DIV_CONT = $('.js-row-cont-cab__in');

    btnCont.click(function (e) {
        e.preventDefault();

        DIV_CONT.after(DIV_CONT.clone());
    });

    /*добавление фото*/
    const IN_FILE = $('.js-input-img');

    IN_FILE.change(function () {
        let ths = $(this);
        let files = ths.prop("files")[0];
        let reader = new FileReader();

        reader.onloadend = function () {

            if (ths.closest('.js-wr-img').find('.js-img').length == 0) {
                ths.closest('.js-wr-img').css('background-image', 'url("' + reader.result + '")');
            } else {
                ths.closest('.js-wr-img').find('.js-img').attr('src', reader.result);
            }

        }

        reader.readAsDataURL(files);

    });


    /*добавить блок*/
    const BTN_DES = $('.js-add-desr');
    const DIV_ROW_ADD = $('.js-row-add');

    BTN_DES.click(function (e) {
        e.preventDefault();

        DIV_ROW_ADD.after(DIV_ROW_ADD.clone());
    });


    /*удалить строку таблицы*/
    $(document).on('click', '.js-close-table', function (e) {
        e.preventDefault();
        let ths = $(this);

        console.log($('.js-row-add').length)

        if ($('.js-row-add').length > 1) {
            ths.closest('.js-row-add').remove();
        }
    });


    /*моб. меню*/
    const $BURGER_MENU = $('.js-burger-menu');
    const ACTIVE_CLASS = "active";
    const $MOB_MENU = $('.js-mob-menu');
    const $BTN_CLOSE_MENU = $('.js-close-mob-menu');
    const $BG_MOB = $('.js-bg-mob');
    const $HEADER = $('.header');

    function closeMob() {
        $BURGER_MENU.removeClass(ACTIVE_CLASS);
        $MOB_MENU.removeClass(ACTIVE_CLASS);
        $BG_MOB.fadeOut(300);
        $HEADER.removeClass('active_heade_menu')
    }

    $BURGER_MENU.click(function () {
        let ths = $(this);

        if (!ths.hasClass(ACTIVE_CLASS)) {
            ths.addClass(ACTIVE_CLASS);
            $MOB_MENU.addClass(ACTIVE_CLASS);
            $BG_MOB.fadeIn(300);
            $HEADER.addClass('active_heade_menu');
        } else {
            closeMob();
        }
    });

    $BTN_CLOSE_MENU.click(function (e) {
        e.preventDefault();
        closeMob();
    })

    /*показать список в футер на моб.*/

    $('.footer__title').click(function () {
        if ($(window).width() <= 480) {
            let ths = $(this);
            let clos = ths.closest('.footer__col-4');

            if (!clos.hasClass('active')) {
                clos.addClass('active');
                clos.find('.footer__list').slideDown(300);
            } else {
                clos.removeClass('active');
                clos.find('.footer__list').slideUp(300);
            }
        }
    });



    /*общее собитие закрития тегов */
    $(document).mouseup(function (e) {
        let select = $('.js-select');

        if (!select.is(e.target) && select.has(e.target).length === 0) {
            closeSelect(select);
        }

        // if (!$MOB_MENU.is(e.target) && $MOB_MENU.has(e.target).length === 0) {
        //     closeMob();
        // }
    });


    /*общая функция события*/
    $(window).on('scroll load resize', function () {
        let srl = $(this).scrollTop();
        headerFixed(srl);
    });



    /* input slider */

    $(".js-range-slider-age").ionRangeSlider({
        type: "double", // два инпута
        min: 18,  // минимальное значение
        max: 123, // максимальное значение
        from: 18, // начальное значение первого 
        to: 40, // начальное значение второго
        hide_min_max: true, // скрыть минимальные и максимальные значения по бокам
        skin: "none", // скрыть стандартное оформление
        extra_classes: "my-skin", // класс для своих стилей
        force_edges: true, // слайдер внутри контейнера
    });

    $(".js-range-slider-breast").ionRangeSlider({
        type: "double", 
        min: 0,  
        max: 20, 
        from: 0,
        to: 5, 
        hide_min_max: true, 
        skin: "none", 
        extra_classes: "my-skin", 
        force_edges: true, 
    });

    $(".js-range-slider-height").ionRangeSlider({
        type: "double", 
        min: 50,  
        max: 300, 
        from: 140,
        to: 190, 
        hide_min_max: true, 
        skin: "none", 
        extra_classes: "my-skin", 
        force_edges: true, 
    });

    $(".js-range-slider-weight").ionRangeSlider({
        type: "double", 
        min: 30,  
        max: 123, 
        from: 50,
        to: 70, 
        hide_min_max: true, 
        skin: "none", 
        extra_classes: "my-skin", 
        force_edges: true, 
    });

});
/*end script*/
