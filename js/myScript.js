document.addEventListener("DOMContentLoaded", function(){
$(document).ready(function () {
        $('ul.tabs').tabs();
        $('ul.tabs').tabs({
          swipeable: false 
        });
        $('ul.tabs').tabs('select', 'tab_id');
      });
});



	