import Image, { ImageProps } from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import mountain from 'public/mountain.jpg';
import {
  FunctionComponent,
  JSXElementConstructor,
  ReactElement,
  ReactNode
} from 'react';

interface TileI {
  wrapperStyles?: string;
  elementStyles?: string;
  elementTextSizes?: string;
  elementBg?: string;
  link?: string;
  title?: string;
  src?: ImageProps['src'];
  Icon?: ReactNode;
}

export default function Tile({
  wrapperStyles = 'basis-1/2 md:basis-1/3',
  elementStyles = 'absolute z-10 p-4 m-4',
  elementTextSizes = 'text-lg 2xl:text-xl',
  elementBg = 'bg-pageWhite',
  link,
  title,
  src = mountain,
  Icon
}: TileI): JSX.Element {
  const wrapperClasses = classNames({
    'relative hover:cursor-default': true,
    [`${wrapperStyles}`]: true
  });

  const elementClasses = classNames({
    'absolute z-10 p-4 m-4': true,
    [`${elementStyles}`]: true,
    [`${elementTextSizes}`]: true,
    [`${elementBg}`]: true
  });

  return (
    <Link href="test" key={link}>
      <div className={wrapperClasses}>
        <p className={elementClasses}>{title}</p>
        <Image layout="responsive" sizes="100vw" alt="mountain" src={src} />
        <div className="absolute bottom-0 right-0 p-4">{Icon}</div>
      </div>
    </Link>
  );
}
