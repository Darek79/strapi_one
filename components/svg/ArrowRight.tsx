import Link from 'next/link';
interface ArrowRightI {
  svgSizeStyle?: string;
  svgFillStyle?: string;
  svgFillArrowStyle?: string;
  svgStrokeArrowStyle?: string;
  strokeWidthStyle?: string;
  linkHref?: string;
}

export default function ArrowRight({
  svgSizeStyle = 'w-12 h-12 hover:cursor-pointer',
  svgFillStyle = '#fff',
  svgFillArrowStyle = '#000',
  svgStrokeArrowStyle = '#000',
  strokeWidthStyle = '2',
  linkHref = '#'
}: ArrowRightI): JSX.Element {
  return (
    <Link href={linkHref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.71 66.96"
        className={svgSizeStyle}
      >
        <path fill={svgFillStyle} d="M0 0h72.71v66.96H0z" />
        <path
          fill={svgFillArrowStyle}
          stroke={svgStrokeArrowStyle}
          strokeWidth={strokeWidthStyle}
          d="M31.924 20.874a1.2 1.2 0 0 1 .826.33l11.994 11.4a1.2 1.2 0 0 1 0 1.739l-11.994 11.4a1.2 1.2 0 0 1-1.653-1.74l11.079-10.527-11.079-10.528a1.2 1.2 0 0 1 .826-2.07Z"
        />
      </svg>
    </Link>
  );
}
