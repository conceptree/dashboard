'user-strict';

requirejs(["dashboard"], function loadingDashboarJS() {

    var menuOptions = {
        selector:'ds-side-menu',
        items:[ 
            {
                name:'Home',
                icon:'home'
            },{
                name:'Calendar',
                icon:'calendar'
            },{
                name:'Messages',
                icon:'comment'
            },{
                name:'Notifications',
                icon:'bell'
            },{
                name:'Contacts',
                icon:'address-book'
            }
        ]
    }

    var dsConfigs = {
        mainSelector: 'ds-main-container',
        menuOptions: menuOptions
    };

    initDashboard(dsConfigs);

});