/*
 * Sets width on an element to the percentage indicated in the arguments, also has a padding option
 * v. 1.0
 * Built by Chelsea Overstreet
 * Github: github.com/overstreetce/fill-element
 *
 */
(function($){
    $.fn.fill = function(options){
        // Creates variables for the selector
        var self = this;

        // Sets defaults for arguments if user does not wish to add them
        var settings = $.extend({
            margin : 10,
            percentage : 100,
            complete : null
        }, options)

        function doFill(){
            var self = $(this);
            var width;
            var parent = self.parent();
            // Sets the full width of the element based on the values set
            if(settings.percentage === 100){
                width = parent.width();
            }
            else if(settings.percentage!=0){
                width = (parent.width())*(settings.percentage/100);
            }
            // Sets the width and margins using inline CSS
            if (width > 0) {
                self.css("margin", settings.margin+"px");
               // self.css("text-overflow", "ellipsis")
                self.css("width", width + "px");
            }

        };

        $(self).each(doFill);

        // Calls the function and returns it
        if ( $.isFunction( settings.complete ) ) {
            settings.complete.call( this );
        }

        return self;
    }
}(jQuery));