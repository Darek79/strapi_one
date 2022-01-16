import { useTrail, a } from '@react-spring/web';
import { ReactNode, Children, useMemo } from 'react';
import classname from 'classnames';

interface TextRightI {
  state?: boolean;
  children?: ReactNode;
  textSizesStyle?: string;
  textWrapperStyle?: string;
}

export default function TextRight({
  state,
  children,
  textSizesStyle = 'h-12 leading-4 md:h-16 lg:h-24',
  textWrapperStyle = 'm-auto'
}: TextRightI): JSX.Element {
  const items = Children.toArray(children);

  const textSizesClasses = classname({
    'overflow-hidden': true,
    [`${textSizesStyle}`]: true
  });

  const textWrapperClasses = classname({
    'relative overflow-hidden': true,
    [`${textWrapperStyle}`]: true
  });

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: state ? 1 : 0,
    x: state ? '0px' : '50px',
    height: state ? 110 : 0,
    from: { opacity: 0, x: '20px', height: 0 }
  });
  return (
    <>
      {trail.map(({ height, x, ...styles }, i) => (
        <a.div
          key={i}
          style={{ transform: x.to(x => `translateY(${x})`), ...styles }}
          className={textSizesClasses}
        >
          <a.div style={{ height }} className={textWrapperClasses}>
            {items[i]}
          </a.div>
        </a.div>
      ))}
    </>
  );
}
