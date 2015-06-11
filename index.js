/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-spin-spinner',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    /* This check is a temporary hack to make it possible to use this addon
     * both as a top level addon dependency, and as a nested addon dependency
     * for another addon, pending resolution of https://github.com/ember-cli/ember-cli/issues/3718
     *
     * Any addon that wants to use this addon as a nested addon dependency needs
     * to do the below imports itself in its included hook.
     */
    if (typeof(app.import) === 'function') {
      var spinPath = path.join(app.bowerDirectory, 'spin.js');

      app.import(path.join(spinPath, 'spin.js'));
      app.import(path.join(spinPath, 'jquery.spin.js'));
    }
  }
};
