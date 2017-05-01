'use-strict';

function initDashboard(dsOptions){

    function initMenuInteractions(){

        $('.ds-side-menu').mouseover(function(){
            $('.ds-side-menu').addClass('menu-open');
        }).mouseout(function(){
            $('.ds-side-menu').removeClass('menu-open');
        });

    }

    initMenuInteractions();

}

initDashboard();