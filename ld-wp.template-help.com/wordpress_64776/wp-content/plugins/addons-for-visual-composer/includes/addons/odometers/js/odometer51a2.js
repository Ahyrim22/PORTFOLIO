jQuery(function ($) {
    $('.lvca-odometers').waypoint(function(direction) {
        var _this = null;
        if (this.adapter && this.element !== 'undefined' ){
            _this = $(this.element);
        } else {
            _this = $(this);
        }

        _this.find('.lvca-odometer .lvca-number').each(function () {
            var odometer = $(this);

            setTimeout(function () {
                var data_stop = odometer.attr('data-stop');
                $(odometer).text(data_stop);

            }, 100);
        });

    }, { offset: $.waypoints('viewportHeight') - 100,
        triggerOnce: true});


});