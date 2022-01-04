import { createElement, ReactNode } from 'react';

interface PageWrapperI {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperI): JSX.Element {
  return createElement(
    'div',
    {
      className:
        'grid grid-rows-default grid-cols-mobile md:grid-cols-tablet xl:grid-cols-desktop'
    },
    children
  );
}
