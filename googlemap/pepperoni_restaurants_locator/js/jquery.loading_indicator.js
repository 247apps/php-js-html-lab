(function($) {
    /**
     *  The following plugin creates a loading indictor for when an input element or link is clicked.
     *  If the confirm message is specified, then an confirm dialog will be displayed to the user.
     */
    
    var methods = {
        "init" : function(options) {
            return this.each(function() {
                    var settings = $.extend( {
                        "confirm_message": false

                    }, options);
                var $loading_image = $("<img src='/images/progress.gif' style='margin: 0 5px; display: inline;' />");
                    $loading_image.hide();
                    $(this).after($loading_image);
                    $(this).click(function() {

                        if ($(this).hasClass("disabled"))
                        {
                            return false;
                        }
                        $(this).data("confirm_message", settings['confirm_message']);
                        if ($(this).prop("tagName") == "INPUT")
                        {
                            $(this).data("text", $(this).val());
                            if (settings['confirm_message'] != false)
                            {
                                if (confirm(settings['confirm_message']))
                                {
                                    $(this).addClass("disabled");
                                    $(this).val("Loading...");
                                    $loading_image.css("display", "inline");
                                    
                                    return true;
                                }
                                else
                                {
                                    $(this).loading_indicator("destroy");
                                    return false;
                                }
                            }   
                            else
                            {
                                $(this).addClass("disabled");
                                $(this).val("Loading...");
                                $loading_image.css("display", "inline");
                                
                                return true;
                            }
                        }
                        else
                        {
                            $(this).data("text", $(this).text());
                            $(this).data("href", $(this).attr("href"));
                            $(this).data("class", $(this).attr("class"));
                            
                            $(this).data("parentNode", this.parentNode);
                            var disabled_container = document.createElement("span");
                            
                            disabled_container.setAttribute("class", "button disabled");
                            disabled_container.innerHTML = "Loading...";
                            $(this).data("disabled_container", disabled_container);
                            this.parentNode.replaceChild(disabled_container, this);
                            
                            if (settings['confirm_message'] != false)
                            {
                                if (confirm(settings['confirm_message']))
                                {
                                    $(this).addClass("disabled");
                                    $loading_image.css("display", "inline");
                                    return true;
                                }
                                else
                                {
                                    $(this).loading_indicator("destroy");
                                    return false;
                                }
                            }   
                            else
                            {
                                $(this).addClass("disabled");
                                $loading_image.css("display", "inline");
                                return true;
                            }                

                        }

                });
            });
        },
        "destroy" : function() {

            return this.each(function() {
                if (this.tagName == "INPUT")
                {
                    $(this).val($(this).data("text"));
                }
                else
                {
                    
                    var link = document.createElement("A");
                    link.setAttribute("href", $(this).data("href"));
                    link.setAttribute("class", $(this).data("class"));
                    link.innerHTML = $(this).data("text");
                    $(this).data("disabled_container").style.display = "none";
                    $(this).data("parentNode").appendChild(link);
                    $(link).loading_indicator({ 
                        "confirm_message" : $(this).data("confirm_message")
                    });
                    
                    
                }
                $(this).removeClass("disabled");
                $(this).next().remove();
                this.disabled = false;
            });
        }
    }
    
    $.fn.loading_indicator = function(method) {
        if ( methods[method] ) 
        {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } 
        else if ( typeof method === 'object' || ! method ) 
        {
            return methods.init.apply( this, arguments );
        } else 
        {
            $.error( 'Method ' +  method + ' does not exist on jQuery.loading_indictaor' );
        }    
    }
    
})(jQuery);