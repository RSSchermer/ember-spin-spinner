import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['spin-spinner'],

  lines: 13,

  length: 20,

  width: 10,

  radius: 30,

  scale: 1,

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

  startSpinner: Ember.on('didInsertElement', function () {
    this.$().css({
      'position': 'absolute',
      'width': 0,
      'height': 0,
      'left': this.get('left'),
      'top': this.get('top')
    });

    this.$().spin({
      lines: this.get('lines'),
      length: this.get('length'),
      width: this.get('width'),
      radius: this.get('radius'),
      scale: this.get('scale'),
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
  }),

  stopSpinner: Ember.on('willDestroyElement', function () {
    this.$().data().spinner.stop();
  })
});
