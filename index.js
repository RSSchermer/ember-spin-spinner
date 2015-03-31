/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-spin-spinner',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    var spinPath = path.join(app.bowerDirectory, 'spin.js');

    app.import(path.join(spinPath, 'spin.js'));
    app.import(path.join(spinPath, 'jquery.spin.js'));
  }
};
