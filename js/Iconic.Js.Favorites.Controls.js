
    (function ($) {
        $.fn.IconicJsSidebar = function (options) {
            var sidebar = this;
            var settings = $.extend({
                buttons: [
                    {name: "favorites", title: "Αγαπημένα", icon: "heart", color: "red", action: null},
                    {name: "recent", title: "Πρόσφατα", icon: "list", color: "darkblue", action: null}
                ]
            }, options);
//            console.log(settings.buttons);
            this.addClass("sidebar");
            $.each(settings.buttons, function (index, value) {
                // console.log("adding button");
                var control = $("<div/>").addClass("control clearfix");

                var text = $("<div/>").addClass("text");//.html(value.title);
                var link = $("<a/>").attr("href", "#").text(value.title);
                link.appendTo(text);
                text.appendTo(control);
                control.appendTo(sidebar);

                var iconDiv = $("<div/>").addClass("icon");
                var icon = $("<i/>").addClass("fa fa-2x fa-" + value.icon).css("color", value.color);
                var iconLink = $("<a/>").attr("href", "#");
                icon.appendTo(iconLink);
                iconLink.appendTo(iconDiv);
                iconDiv.appendTo(control);

                var name = value.name;
                control.on("click", function () {
                    value.action(name);
                });
            });

            this.on("mouseenter", function () {
                $(".text").addClass("active");
            });
            this.on("mouseleave", function () {
                $(".text").removeClass("active");
            });

            return this;
        };
    }(jQuery));
