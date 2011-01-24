/**
 * @file
 * Client-side backbone script for editing datasets.
 */
var editDataSet = function(name) {

    // This is the model for an atomic data property.
    window.DataProperty = Backbone.Model.extend({
        url: '/data/model/' + name // todo: URL encode
    });

    // Cache the template function for a single item.
    // todo: use HBS
    template: _.template($('#dataset-template').html()),

    // The DOM element for a dataset...
    window.DataSetView = Backbone.View.extend({
        tagName: 'div',
        id:'dataset',

        initialize: function() {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.model.view = this;
        },

        // Re-render the contents of the todo item.
        render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            this.setContent();
            return this;
        },
    });
}
