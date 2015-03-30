import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['spin-spinner'],

  attributeBindings: ['style'],

  lines: 13,

  length: 20,

  width: 10,

  radius: 30,

  corners: 1,

  rotate: 0,

  direction: 1,

  speed: 1,

  trail: 60,

  shadow: false,

  hwaccel: false,

  color: null,

  left: '50%',

  top: '50%',

  style: function () {
    return ('position: absolute; width: 0; height: 0; left: '+ this.get('left') +'; top: '+ this.get('top') +';').htmlSafe();
  }.property('top', 'left'),

  startSpinner: function () {
    this.$().spin({
      lines: this.get('lines'),
      length: this.get('length'),
      width: this.get('width'),
      radius: this.get('radius'),
      corners: this.get('corners'),
      rotate: this.get('rotate'),
      direction: this.get('direction'),
      speed: this.get('speed'),
      trail: this.get('trail'),
      shadow: this.get('shadow'),
      hwaccel: this.get('hwaccel'),
      left: 'auto',
      top: 'auto'
    }, this.get('color'));
  }.on('didInsertElement'),

  stopSpinner: function () {
    this.$().data().spinner.stop();
  }.on('willDestroyElement')
});
