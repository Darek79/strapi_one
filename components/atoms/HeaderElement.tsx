import { createElement, HTMLAttributes, ReactNode } from 'react';
export interface HeaderElementI extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  htmlTag?: 'header' | 'article';
}
export default function HeaderElement({
  children,
  htmlTag = 'header',
  ...rest
}: HeaderElementI): JSX.Element {
  return createElement(htmlTag, rest, children);
}
