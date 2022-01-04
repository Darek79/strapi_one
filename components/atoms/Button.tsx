import { createElement, ButtonHTMLAttributes } from 'react';

export default function Button({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return createElement('button', { ...rest });
}
