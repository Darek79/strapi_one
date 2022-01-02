import { createElement, ReactNode } from 'react';
interface MainWrapperI {
  children: ReactNode;
  htmlTag: 'nav' | 'main' | 'footer';
  className: string;
}

export default function MainWrapper({
  htmlTag,
  children,
  className,
  ...rest
}: MainWrapperI): JSX.Element {
  return createElement(htmlTag, { className, rest }, children);
}
