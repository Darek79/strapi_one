import type { ArrowRightI } from './ArrowRight';

interface FooterDividerI extends ArrowRightI {}

export default function FooterDivider({
  svgSizeStyle = 'w-2 h-24 self-center hover:cursor-pointer',
  svgFillStyle = '#fff',
  svgFillArrowStyle = '#fff',
  svgStrokeArrowStyle = '#fff',
  strokeWidthStyle = '2'
}: FooterDividerI): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2.88 191.52"
      className={svgSizeStyle}
    >
      <path
        fill={svgFillArrowStyle}
        stroke={svgStrokeArrowStyle}
        strokeLinecap="round"
        strokeWidth={strokeWidthStyle}
        d="M1.5 0v191.71"
      />
    </svg>
  );
}
