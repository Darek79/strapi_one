import { HeaderElement, TextElement } from 'components';
import type { HeaderElementI } from './../atoms/HeaderElement';
import ideas from 'public/ideasImg.jpg';
import type { TextElementType } from 'types';
import Image, { ImageProps } from 'next/image';
import classname from 'classnames';
interface HeaderI {
  htmlTagWrapper?: HeaderElementI['htmlTag'];
  htmlTagSlogan?: TextElementType;
  htmlTagDescription?: TextElementType;
  imageOptional?: boolean;
  descriptionOptional?: boolean;
  imageWrapperStyle?: string;
  src?: { src: ImageProps['src']; alt: string };
  txtSlogan?: string;
  txtDescription?: string;
  headerWrapperStyles?: string;
  textElementWrapperStyles?: string;
}

export default function Header({
  imageOptional = false,
  descriptionOptional = false,
  imageWrapperStyle = 'py-6',
  htmlTagWrapper = 'header',
  htmlTagSlogan = 'h3',
  htmlTagDescription = 'p',
  src = { src: ideas, alt: 'ideas' },
  txtSlogan = 'Mixology&nbsp;Campaign',
  txtDescription = `Consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut
  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
  veniam, quis nostrud .`,
  headerWrapperStyles = 'w-full',
  textElementWrapperStyles = 'w-full flex flex-col justify-center items-center'
}: HeaderI): JSX.Element {
  const headerClasses = classname({
    [`${headerWrapperStyles}`]: true
  });

  const textWrapperClasses = classname({
    hidden: descriptionOptional,
    [`${textElementWrapperStyles}`]: true
  });
  const imageClasses = classname({
    hidden: imageOptional,
    [`${imageWrapperStyle}`]: true
  });

  return (
    <HeaderElement htmlTag={htmlTagWrapper} className={headerClasses}>
      <div className={imageClasses}>
        <Image src={src.src} alt={src.alt} layout="responsive" sizes="100vw" />
      </div>
      <div className={textWrapperClasses}>
        <TextElement
          htmlTag={htmlTagSlogan}
          className="w-3/4 font-bold text-3xl"
          dangerouslySetInnerHTML={{ __html: txtSlogan }}
        />
        <TextElement htmlTag={htmlTagDescription} className="w-3/4">
          {txtDescription}
        </TextElement>
      </div>
    </HeaderElement>
  );
}
