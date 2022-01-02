import { createElement, ReactNode } from 'react';

interface PageWrapperI {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperI): JSX.Element {
  return createElement('div', {className:'gridTemplateColumns'}, children);
}
