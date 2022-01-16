import {
  useEffect,
  useState,
  useRef,
  VideoHTMLAttributes,
  useCallback
} from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
import classname from 'classnames';
interface VideoItemI {
  videoSrc?: string;
  state?: boolean;
}

export default function VideoItem({
  videoSrc = 'womanc2a.mp4',
  state
}: VideoItemI): JSX.Element {
  const { inView, ref } = useInView({ threshold: 0.4 });

  return (
    <div className="w-full overflow-hidden relative" ref={ref}>
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="100%"
        playing={inView}
        volume={0}
        muted={true}
        loop={true}
      />
    </div>
  );
}
