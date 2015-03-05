config = {
    baseUrl: '/src',
    paths: {
        "Markdown.Converter":       "legacy/Markdown.Converter",
        "Markdown.Extra":           "legacy/Markdown.Extra",
        "Markdown.Sanitizer":       "legacy/Markdown.Sanitizer",
        "doc-ready":                "bower_components/doc-ready",
        "eventEmitter":             "bower_components/eventEmitter",
        "eventie":                  "bower_components/eventie",
        "get-size":                 "bower_components/get-size",
        "get-style-property":       "bower_components/get-style-property",
        "imagesloaded":             "bower_components/imagesloaded/imagesloaded",
        "jcrop":                    "bower_components/jcrop/js/jquery.Jcrop",
        "jquery":                   "bower_components/jquery/dist/jquery",
        "jquery.browser":           "bower_components/jquery.browser/dist/jquery.browser",
        "jquery.anythingslider":    "bower_components/AnythingSlider/js/jquery.anythingslider",
        "jquery.chosen":            "bower_components/chosen/chosen/chosen.jquery",
        "jquery.form":              "bower_components/jquery-form/jquery.form",
        "jquery.fullcalendar":      "bower_components/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd":  "bower_components/fullcalendar/lib/jquery-ui.custom.min",
        "jquery.placeholder":       "bower_components/jquery-placeholder/jquery.placeholder.min",
        "jquery.textchange":        "bower_components/jquery-textchange/jquery.textchange",
        "klass":                    "bower_components/klass/src/klass",
        "less":                     "bower_components/less.js/dist/less-1.6.2",
        "logging":                  "bower_components/logging/src/logging",
        "masonry":                  "bower_components/masonry/dist/masonry.pkgd",
        "matches-selector":         "bower_components/matches-selector",
        "modernizr":                "bower_components/modernizr/modernizr",
        "outlayer":                 "bower_components/outlayer",
        "parsley":                  "bower_components/parsleyjs/parsley",
        "parsley.extend":           "bower_components/parsleyjs/parsley.extend",
        "patternslib.slides":       "bower_components/slides/src/slides",
        "photoswipe":               "legacy/photoswipe",
        "prefixfree":               "bower_components/prefixfree/prefixfree.min",
        "select2":                  "bower_components/select2/select2.min",
        "spectrum":                 "bower_components/spectrum/spectrum",
        "tinymce":                  "bower_components/jquery.tinymce/jscripts/tiny_mce/jquery.tinymce",

        // Core
        "pat-compat":               "core/compat",
        "pat-depends_parse":        "lib/depends_parse",
        "pat-dependshandler":       "lib/dependshandler",
        "pat-htmlparser":           "lib/htmlparser",
        "pat-input-change-events":  "lib/input-change-events",
        "pat-jquery-ext":           "core/jquery-ext",
        "pat-logger":               "core/logger",
        "pat-parser":               "core/parser",
        "pat-registry":             "core/registry",
        "pat-remove":               "core/remove",
        "pat-store":                "core/store",
        "pat-url":                  "core/url",
        "pat-utils":                "core/utils",

        // Patterns
        "patterns": "patterns",
        "pat-ajax": "pat/ajax",
        "pat-autofocus": "pat/autofocus",
        "pat-autoscale": "pat/autoscale",
        "pat-autosubmit": "pat/autosubmit",
        "pat-autosuggest": "pat/autosuggest",
        "pat-breadcrumbs": "pat/breadcrumbs",
        "pat-bumper": "pat/bumper",
        "pat-carousel": "pat/carousel",
        "pat-checkedflag": "pat/checkedflag",
        "pat-checklist": "pat/checklist",
        "pat-chosen": "pat/chosen",
        "pat-collapsible": "pat/collapsible",
        "pat-colour-picket": "pat/colour-picker",
        "pat-depends": "pat/depends",
        "pat-edit-tinymce": "pat/edit-tinymce",
        "pat-equaliser": "pat/equaliser",
        "pat-expandable": "pat/expandable",
        "pat-focus": "pat/focus",
        "pat-formstate": "pat/form-state",
        "pat-forward": "pat/forward",
        "pat-fullcalendar": "pat/fullcalendar",
        "pat-gallery": "pat/gallery",
        "pat-image-crop": "pat/image-crop",
        "pat-inject": "pat/inject",
        "pat-legend": "pat/legend",
        "pat-markdown": "pat/markdown",
        "pat-masonry": "pat/masonry",
        "pat-menu": "pat/menu",
        "pat-modal": "pat/modal",
        "pat-navigation": "pat/navigation",
        "pat-notification": "pat/notification",
        "pat-placeholder": "pat/placeholder",
        "pat-selectbox": "pat/selectbox",
        "pat-skeleton": "pat/skeleton",
        "pat-slides": "pat/slides",
        "pat-slideshow-builder": "pat/slideshow-builder",
        "pat-sortable": "pat/sortable",
        "pat-stacks": "pat/stacks",
        "pat-subform": "pat/subform",
        "pat-switch": "pat/switch",
        "pat-toggle": "pat/toggle",
        "pat-tooltip": "pat/tooltip",
        "pat-validate": "pat/validate",
        "pat-zoom": "pat/zoom",
        // Calendar pattern
        "moment": "bower_components/moment/moment",
        "moment-timezone": "bower_components/moment-timezone/moment-timezone",
        "pat-calendar": "pat/calendar/calendar",
        "pat-calendar-dnd": "pat/calendar/dnd",
        "pat-calendar-moment-timezone-data": "pat/calendar/moment-timezone-data"
    },

    shim: {
        "jcrop":                        { deps: ["jquery"] },
        "jquery":                       { exports: ["jQuery"] },
        "jquery.anythingslider":        { deps: ["jquery"] },
        "jquery.chosen":                { deps: ["jquery"] },
        "jquery.fullcalendar.dnd":      { deps: ["jquery"] },
        "jquery.placeholder":           { deps: ["jquery"] },
        "jquery.textchange":            { deps: ["jquery"] },
        "parsley":                      { deps: ["jquery"] },
        "parsley.extend":               { deps: ["jquery"] },
        "photoswipe":                   { deps: ["klass"] },
        "select2":                      { deps: ["jquery"] },
        "spectrum":                     { deps: ["jquery"] },
        "tinymce":                      { deps: ["jquery"] }
    },
};

if (typeof(require) !== 'undefined') {
    require.config(config);
    require(["patterns"], function(patterns) {});
}
