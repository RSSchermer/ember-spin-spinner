module.exports = {
  name: 'ember-spin-spinner',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/spin.js/spin.js');
    app.import('bower_components/spin.js/jquery.spin.js');
  }
};
