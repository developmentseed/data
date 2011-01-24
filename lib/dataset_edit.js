/**
 * @file
 * Client-side backbone script for editing datasets.
 */
var editDataSet = function(name) {

    // This is the model for an atomic data property.
    window.DataProperty = Backbone.Model.extend({
    });

    // A DataSet is a collection of DataProperties.
    window.DataSet = Backbone.Collection.extend({
        model: DataProperty
    });

    // Create a global collection of data.
    window.DataSet = new DataSet(/*todo: add name*/);

    // The DOM element for a dataset...
    window.DataSetView = Backbone.View.extend({});
}
