angular.module('itc.dnd', []);

(function ()
{
    'use strict';

    function itcDraggable()
    {
        return {
            restrict: 'C',
            transclude: false,
            scope: false,
            link: function (scope, elm)
            {
                elm.draggable({
                    revert: true
                });
                scope.$on('$destroy', function ()
                {
                    try {
                        elm.draggable('destroy');
                    } catch (e) {
                    }
                });
            },
            replace: false
        };
    }

    angular.module('itc.dnd').directive('itcDraggable', itcDraggable);
})();

(function ()
{
    'use strict';

    function itcDroppable()
    {
        return {
            restrict: 'C',
            transclude: false,
            scope: false,
            link: function (scope, elm)
            {
                elm.droppable({
                    drop: function (event, ui)
                    {
                        var draggable = angular.element(ui.draggable).scope();
                        if (scope.onBeforeDrop(draggable) !== false) {
                            scope.onDrop(draggable);
                        }
                    }
                });
                scope.$on('$destroy', function ()
                {
                    try {
                        elm.droppable('destroy');
                    } catch (e) {
                    }
                });
            },
            replace: false
        };
    }

    angular.module('itc.dnd').directive('itcDroppable', itcDroppable);
})();
