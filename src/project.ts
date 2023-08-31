import {makeProject} from '@motion-canvas/core';

import firstScene from './scenes/firstScene?scene';
import Recording from 'C:/Users/Tonas Jane/OneDrive/Documents/MotionCanvas/climate-change-video/assets/Recording.mp4'

export default makeProject({
  scenes: [firstScene],
  audio: Recording,
});
