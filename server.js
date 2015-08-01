var waveform = require('waveform');

// waveform generator library - https://github.com/andrewrk/node-waveform
waveform(process.argv[2], {
	// waveform.js options
  waveformjs: process.argv[3],  // path to output-file or - for stdout
  'wjs-width': 800,             // width in samples
  'wjs-precision': 4,           // how many digits of precision
  'wjs-plain': false
	}, function(err, stdout) {
  console.log(err);
});