import React from 'react';
import { 
  VimePlayer,
  VimeVideo, 
  VimeDefaultUi, 
  VimeControls,
  VimeControlSpacer,
  VimeMuteControl,
  VimePlaybackControl,
  VimeTimeProgress,
} from '@vime/react';

export const CustomControlsPlayer = () => (
  <VimePlayer>
    <VimeVideo crossOrigin="" poster="https://media.vimejs.com/poster.png">
      <source 
        data-src="https://media.vimejs.com/720p.mp4" 
        type="video/mp4" 
      />
      <track 
        default 
        kind="subtitles" 
        src="https://media.vimejs.com/subs/english.vtt" 
        srcLang="en" 
        label="English" 
      />
    </VimeVideo> 

    <VimeDefaultUi noControls>
      <VimeControls fullWidth pin="topLeft">
        <VimeControlSpacer />
        <VimeMuteControl />
      </VimeControls>

      <VimeControls pin="center">
        <VimePlaybackControl hideTooltip style={{ '--control-scale': 2 }} />
      </VimeControls>
      
      <VimeControls fullWidth pin="bottomLeft">
        <VimeControlSpacer />
        <VimeTimeProgress />
      </VimeControls>
    </VimeDefaultUi>
  </VimePlayer>
);