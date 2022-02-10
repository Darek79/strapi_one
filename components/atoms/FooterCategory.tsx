import { TextElement } from 'components';
import Link from 'next/link';
import classname from 'classnames';
interface FooterCategoryI {
  categoryItems?: string[];
}

export default function FooterCategory({
  categoryItems = []
}: FooterCategoryI): JSX.Element {
  return (
    <section className="h-full">
      {categoryItems.map((el, i) => {
        if (i === 0) {
          return (
            <Link href={el} key={el}>
              <TextElement className="text-footer-textWhite mb-4" htmlTag="p">
                {el}
              </TextElement>
            </Link>
          );
        } else {
          return (
            <Link href={el} key={el}>
              <TextElement className="text-footer-textGrey" htmlTag="p">
                {el}
              </TextElement>
            </Link>
          );
        }
      })}
    </section>
  );
}
