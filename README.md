# Ember-spin-spinner

Simple Ember spinner component based on [spin.js](http://fgnass.github.io/spin.js/).

## Installation

```
npm install ember-spin-spinner --save-dev
ember generate ember-spin-spinner
```

## Usage

Example:

``` handlebars
{{spin-spinner lines=13 length=20 width=10}}
```

The following properties can be set:

* `lines` (default: 13): the number of lines to draw
* `length` (default: 20): the length of each line
* `width` (default: 10): the line thickness
* `radius` (default: 30): the radius of the inner circle
* `corners` (default: 1): corner roundness (0..1)
* `rotate` (default: 0): the rotation offset
* `direction` (default: 1): 1 for clockwise, -1 for counterclockwise
* `color` (default: parent element text color): #rgb or #rrggbb or array of colors
* `speed` (default: 1): rounds per second
* `trail` (default: 60): afterglow percentage
* `shadow` (default: false): whether to render a shadow
* `hwaccel` (default: false): whether to use hardware acceleration
* `top` (default: '50%'): top position relative to parent
* `left` (default: '50%'): left position relative to parent.
