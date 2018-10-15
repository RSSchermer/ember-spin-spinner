import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { Spinner } from 'spin';

export default Component.extend({
  classNames: ['spin-spinner'],

  attributeBindings: ['style'],

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

  zIndex: 2e9,

  shadow: false,

  hwaccel: false,

  color: '#333',

  left: '50%',

  top: '50%',

  style: computed('left', 'top', function () {
    return htmlSafe('position: absolute;' +
      'width: 0;' +
      'height: 0;' +
      `left: ${this.get('left')};` +
      `top: ${this.get('top')};`);
  }),

  didInsertElement() {
    let spinner = new Spinner({
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
      zIndex: this.get('zIndex'),
      shadow: this.get('shadow'),
      hwaccel: this.get('hwaccel'),
      left: 'auto',
      top: 'auto',
      color: this.get('color')
    }).spin(this.element);
    
    this.set('spinner', spinner);
  },

  willDestroyElement() {
    this.get('spinner').stop();
  }
});
