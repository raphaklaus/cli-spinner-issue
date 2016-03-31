'use strict';

const Spinner = require('cli-spinner').Spinner;

var sum = 0;
var downloadSpinner = new Spinner('Downloading.. %s');
downloadSpinner.setSpinnerString('|/-\\');
downloadSpinner.start();

console.log('Spinner started.')

console.log('Loop started.')

for (var i=1;i<999000000;i++){
  sum = ((sum * i / sum) * i / sum);
}

console.log('Loop ended.');

setTimeout(() => {
  downloadSpinner.stop(true)
},2000)
