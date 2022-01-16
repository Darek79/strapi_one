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
  textBlockOptional?: boolean;
  imageWrapperStyle?: string;
  src?: { src: ImageProps['src']; alt: string };
  txtSlogan?: string;
  txtDescription?: string;
  headerWrapperStyles?: string;
  textElementWrapperStyles?: string;
  textBlockSloganOptional?: boolean;
  textBlockSloganDesc?: boolean;
  textSloganStyles?: string;
  textDescStyles?: string;
}

export default function Header({
  imageOptional = false,
  textBlockOptional = false,
  textBlockSloganOptional = false,
  textBlockSloganDesc = false,
  imageWrapperStyle = 'py-6 sm:w-3/4 md:w-1/2 lg:w-full lg:py-0 ',
  htmlTagWrapper = 'header',
  htmlTagSlogan = 'h3',
  htmlTagDescription = 'p',
  src = { src: ideas, alt: 'ideas' },
  txtSlogan = 'Mixology&nbsp;Campaign',
  txtDescription = `Consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut
  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
  veniam, quis nostrud .`,
  headerWrapperStyles = 'w-full sm:flex sm:flex-col sm:items-center sm:justify-center lg:gap-4',
  textElementWrapperStyles = 'w-full sm:w-3/4 md:w-1/2 lg:w-full lg:gap-2 flex flex-col justify-center items-center',
  textSloganStyles = 'w-3/4 lg:w-full font-bold text-3xl',
  textDescStyles = 'w-3/4 lg:w-full lg:text-md'
}: HeaderI): JSX.Element {
  const headerClasses = classname({
    [`${headerWrapperStyles}`]: true
  });

  const textWrapperClasses = classname({
    hidden: textBlockOptional,
    [`${textElementWrapperStyles}`]: true
  });
  const textSloganClasses = classname({
    hidden: textBlockSloganOptional,
    [`${textSloganStyles}`]: true
  });
  const textDescClasses = classname({
    hidden: textBlockSloganDesc,
    [`${textDescStyles}`]: true
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
          className={textSloganClasses}
          dangerouslySetInnerHTML={{ __html: txtSlogan }}
        />
        <TextElement
          htmlTag={htmlTagDescription}
          className={textDescClasses}
          dangerouslySetInnerHTML={{ __html: txtDescription }}
        />
      </div>
    </HeaderElement>
  );
}
