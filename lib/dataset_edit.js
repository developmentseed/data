/**
 * @file
 * Client-side backbone script for editing datasets.
 */
var editDataSet = function(name) {

    // This is the model for an atomic data property.
    window.DataSet = Backbone.Model.extend({
        url: '/data/model/' + name // todo: URL encode
    });

    window.dataSet = new DataSet;

    // The DOM element for a dataset...
    window.DataSetView = Backbone.View.extend({

        // Instead of creating a new element in the DOM, attach to existing.
        el: $("#dataset"),

        // Cache the template function for a single item.
        template: _.template($('#dataset-template').html()),

        initialize: function() {
            _.bindAll(this, 'addOne', 'addAll', 'render');
            // Render on any change.
            dataSet.bind('all', this.render);
            this.model.view = this;
        },

        // Re-render the contents of the todo item.
        render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            this.setContent();
            return this;
        },
    });

    window.dataSetEditor = new DataSetView({model: dataSet});
}
