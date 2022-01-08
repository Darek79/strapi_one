import { createElement, HTMLAttributes, ReactNode } from 'react';
interface HeaderElementI extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}
export default function HeaderElement({
  children,
  ...rest
}: HeaderElementI): JSX.Element {
  return createElement('header', rest, children);
}
