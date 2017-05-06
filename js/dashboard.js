'use-strict';

function initDashboard(dsOptions){

    var mainSelector =  document.getElementsByClassName(dsOptions.mainSelector);
    var sideMenuSelector = document.getElementsByClassName(dsOptions.sideMenuSelector);

    requirejs(["menu"], function(){
        initMenu(dsOptions.menuOptions);
    });

}