# < podcast-player >
A polymer element for podcast player

## Installation
You can install `podcast-player` with the help of bower.

```shell
bower install podcast-player --save
```

## How to use

Simple use the following HTML tag.

```HTML
<podcast-player
	wavecolor="#ffffff"
	progresscolor="#CFD8DC"
	src="Project_5am_-_01_-_June_8th_-There_is_another_waycourage.mp3"
	name="June 8th -There is another way...(courage)"
	episode="12"
	coverart="cover_290x290.png"></podcast-player>
```

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


### Credits
- Music used for the demo - [The Free Music Archive](http://freemusicarchive.org/)
- Wave form visualizer - [wavesurfer.js](http://www.wavesurfer.fm/)