import classname from 'classnames';
interface VideoItemI {
  videoSrc?: string;
}

export default function VideoItem({
  videoSrc = 'woman.mp4'
}: VideoItemI): JSX.Element {
  return (
    <div className="w-full overflow-hidden relative">
      <video className="object-cover" loop={true} autoPlay={true} muted={true}>
        <source src={videoSrc} type="video/mp4"></source>
      </video>
    </div>
  );
}
