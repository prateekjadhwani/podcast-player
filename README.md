# < podcast-player >
A polymer element for podcast player

![Screenshot](screenshot.gif)

## Installation
You can install `podcast-player` with the help of bower.

```shell
bower install podcast-player --save
```

### Dependency Installation for the Backend Waveform Generator

If the podcast file is more than 10MB, parsing that file on the client end might not be the best choice. This may also make the player to crash. Hence we are bundelling a waveform generator file called `server.js` along with it.

The `server.js` file uses the [node-waveform](https://github.com/andrewrk/node-waveform) library. You might want to look into the [installation instructions](https://github.com/andrewrk/node-waveform#installation) for that.

## How to use

Simply use the following HTML tag.

```HTML
<podcast-player
  wavecolor="#ffffff"
  progresscolor="#CFD8DC"
  src="Project_5am_-_01_-_June_8th_-There_is_another_waycourage.mp3"
  name="June 8th -There is another way...(courage)"
  episode="12"
  coverart="cover_290x290.png"
  datapoints={{data}}></podcast-player>
```

where `data` variable can have the datapoints for waveform generated from `server.js` file.

Look in the [demo file](https://github.com/prateekjadhwani/podcast-player/blob/master/demo.html) for more details


## Attributes
| attribute | description | type | example value |
|-----------|-------------|------|---------------|
| wavecolor | The color of the waveform | String |`#ffffff`|
| progresscolor| The color of the progress bar that runs over the waveform | String | `#CFD8DC` |
| src | The src of the `mp3` file | String | `Project_5am_-_01_-_June_8th_-There_is_another_waycourage.mp3` |
| name | The title of the Podcast | String | `June 8th -There is another way...(courage)` |
| episode | The episode number of the file | String | `12` or `June 8th - 01` |
| coverart | Link to the cover art image | String | `cover_290x290.png` |
| datapoints | The data points for waveform | Array | `[0.1846,0.1711,0.9596,0.6668,...]` |

### Performance related information

- ~~Using large `.mp3` files may cause the wavesurfer library to take large time to parse the file into waveform. Our suggestion would be to use `.wav` files that are under 2-3 MBs.~~ We solved this problem by providing a file `server.js` that could parse the waveform at the backend itself, thus saving the client from doing all the waveform related processing.

### Generating Waveform

You will need to go to the folder where it has `server.js` file and run the following command in terminal.

```shell
node server.js filename.mp3 outputfile.json
```

Where `filename.mp3` can be any file. And `outputfile.json` is the file where you can get the waveform data points.

### Credits

- Music used for the demo - [WAV-SOUNDS](http://www.wav-sounds.com/) and [Noise addicts](http://www.noiseaddicts.com/)
- Wave form visualizer - [wavesurfer.js](http://www.wavesurfer.fm/)
- Wave form generator - [node-waveform](https://github.com/andrewrk/node-waveform)
