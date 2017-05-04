'use-strict';

function initDashboard(dsOptions){

    var mainSelector =  document.getElementsByClassName(dsOptions.mainSelector);
    var sideMenuSelector = document.getElementsByClassName(dsOptions.sideMenuSelector);


    /*
     * Side Menu
     */
    function initSideMenu(){
         initMenuInteractions();
    }

    /*
     * Side Menu Interactions
     */
    function initMenuInteractions(){

        $(sideMenuSelector).mouseover(function(){
            $(sideMenuSelector).addClass('menu-open');
        }).mouseout(function(){
            $(sideMenuSelector).removeClass('menu-open');
        });

    }


    initSideMenu();

}