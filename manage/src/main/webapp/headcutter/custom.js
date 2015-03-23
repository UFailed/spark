window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
        = c.clear = c.exception = c.trace = c.assert = function () {
    };
    return c;
})();
// JavaScript Document
jQuery(function ($) {
    // Create variables (in this scope) to hold the API and image size
    var jcrop_api,
        boundx,
        boundy,

    // Grab some information about the preview pane
        $preview = $('#preview-pane'),
        $pcnt = $('#preview-pane .preview-container'),
        $pimg = $('#preview-pane .preview-container img'),
        $pcntS = $('#preview-pane .preview-container_small'),
        $pimgS = $('#preview-pane .preview-container_small img'),
        $pcntB = $('#preview-pane .preview-container_big'),
        $pimgB = $('#preview-pane .preview-container_big img'),
        xsize = $pcnt.width(),
        ysize = $pcnt.height();
    xSsize = $pcntS.width(),
        ySsize = $pcntS.height(),
        xBsize = $pcntB.width(),
        yBsize = $pcntB.height()
    console.log('init', [xsize, ysize, xSsize, ySsize]);
    $('#target').Jcrop({
        onChange: updatePreview,
        onSelect: updatePreview,
        aspectRatio: xsize / ysize,
        aspectRatioS: xSsize / ySsize,
        aspectRatioB: xBsize / yBsize,
        boxWidth: 298,
        boxHeight: 298
    }, function () {
        // Use the API to get the real image size
        var bounds = this.getBounds();
        boundx = bounds[0];
        boundy = bounds[1];
        // Store the API in the jcrop_api variable
        jcrop_api = this;

        // Move the preview into the jcrop container for css positioning
        $preview.appendTo(jcrop_api.ui.holder);
    });

    function updatePreview(c) {
        if (parseInt(c.w) > 0) {
            var rx = xsize / c.w;
            var ry = ysize / c.h;
            var Srx = xSsize / c.w;
            var Sry = ySsize / c.h;
            var Brx = xBsize / c.w;
            var Bry = yBsize / c.h;

            $pimg.css({
                width: Math.round(rx * boundx) + 'px',
                height: Math.round(ry * boundy) + 'px',
                marginLeft: '-' + Math.round(rx * c.x) + 'px',
                marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
            $pimgS.css({
                width: Math.round(Srx * boundx) + 'px',
                height: Math.round(Sry * boundy) + 'px',
                marginLeft: '-' + Math.round(Srx * c.x) + 'px',
                marginTop: '-' + Math.round(Sry * c.y) + 'px'
            });
            $pimgB.css({
                width: Math.round(Brx * boundx) + 'px',
                height: Math.round(Bry * boundy) + 'px',
                marginLeft: '-' + Math.round(Brx * c.x) + 'px',
                marginTop: '-' + Math.round(Bry * c.y) + 'px'
            });
        }
    };
});

