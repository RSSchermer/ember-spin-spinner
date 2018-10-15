# Ember-spin-spinner

Simple Ember spinner component based on [spin.js](http://fgnass.github.io/spin.js/).

[![Build Status](https://travis-ci.org/RSSchermer/ember-spin-spinner.svg?branch=master)](https://travis-ci.org/RSSchermer/ember-spin-spinner)

## Installation

```
ember install ember-spin-spinner
```

## Usage

Example:

```hbs
<!-- somepage.hbs -->

<div class='loading-container'>
  {{spin-spinner lines=13 length=20 width=10}}
</div>
```

``` css
/* somepage.css */

.loading-container {

  /* The spinner is absolutely positioned (in the center by default),
   * so make sure to set the containing element's position to relative.
   */
  position: relative;
}
```
The spinner is absolutely positioned (in the center by default), so make sure to set the containing element's position
to relative. You may also want to give the containing element a minimum height.

The following properties can be set to customize a particular spinner:

* `lines` (default: `13`): the number of lines to draw.
* `length` (default: `20`): the length of each line.
* `width` (default: `10`): the line thickness.
* `radius` (default: `30`): the radius of the inner circle.
* `scale` (default: `1`): scales the overall size of the spinner.
* `corners` (default: `1`): corner roundness (0..1).
* `rotate` (default: `0`): the rotation offset.
* `direction` (default: `1`): 1 for clockwise, -1 for counterclockwise.
* `color` (default: `#333`): #rgb or #rrggbb or array of colors.
* `speed` (default: `1`): rounds per second.
* `trail` (default: `60`): afterglow percentage.
* `zIndex` (default: `2e9`): the z-index
* `shadow` (default: `false`): whether to render a shadow.
* `hwaccel` (default: `false`): whether to use hardware acceleration.
* `top` (default: `'50%'`): top position relative to parent.
* `left` (default: `'50%'`): left position relative to parent.

If you want to set different defaults for all spinners in your application, extend the component and override the
defaults with your own:

```javascript
// app/components/spin-spinner.js
import SpinSpinnerComponent from 'ember-spin-spinner/components/spin-spinner';

export default SpinSpinnerComponent.extend({
  length: 6,

  width: 2
});
```
