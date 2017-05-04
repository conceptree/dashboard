'user-strict';

requirejs(["dashboard"], function loadingDashboarJS() {
    

    var dsConfigs = {
        mainSelector : 'ds-main-container',
        sideMenuSelector: 'ds-side-menu'
    };

    initDashboard(dsConfigs);

});