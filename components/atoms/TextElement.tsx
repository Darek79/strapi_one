import { createElement, HTMLAttributes } from 'react';
import type { TextElementType } from 'types';

interface TextElementI
  extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  htmlTag: TextElementType;
}

export default function TextElement({
  htmlTag = 'p',
  ...rest
}: TextElementI): JSX.Element {
  return createElement(htmlTag, rest);
}
