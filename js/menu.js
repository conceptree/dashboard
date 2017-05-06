'use-strict';

function initMenu(menuOptions){

    var selector =  document.getElementsByClassName(menuOptions.selector)[0];
    var mainDOM = '<div class="ds-side-menu-logo fa fa-adn"></div><nav class="ds-side-menu-navigation"></nav>';

    $(selector).append(mainDOM);

    /*
     * Side Menu
     */
    function buildMenuItems(){
       menuOptions.items.forEach(function(element) {
           var html = '<a><div class="ds-side-menu-navigation-icon fa fa-'+element.icon+'"></div><div class="ds-side-menu-navigation-label">'+element.name+'</div></a>';
           var menuContainer =  $(selector).find('.ds-side-menu-navigation');
           $(menuContainer).append(html); 
       });

       initMenuInteractions();
    }

    /*
     * Side Menu Interactions
     */
    function initMenuInteractions(){

        $(selector).mouseover(function(){
            $(selector).addClass('menu-open');
        }).mouseout(function(){
            $(selector).removeClass('menu-open');
        });

    }

    buildMenuItems();


}