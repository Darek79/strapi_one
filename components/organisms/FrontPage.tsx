import { Button, TextElement } from 'components';
import classNames from 'classnames';
import img from './../../public/background.jpeg';
import Image from 'next/image';
interface FrontPageI {
  sectionStylesBg?: string;
  elementStyles?: string;
  headerStyles?: string;
  pStyles?: string;
  pStylesA?: string;
  buttonWrapper?: string;
  buttonWrapperA?: string;
}

export default function FrontPage({
  sectionStylesBg = 'bg-pageDarkGrey',
  elementStyles = 'md:mt-80',
  headerStyles = 'gap-4 md:gap-6',
  pStyles = 'textSizes font-bold text-pageWhite',
  pStylesA = '',
  buttonWrapper = 'flex flex-col justify-center items-center md:flex-row',
  buttonWrapperA = 'gap-6 lg:gap-28 mt-4 md:pt-6 xl:pt-12 mb-4'
}: FrontPageI): JSX.Element {
  const sectionClasses = classNames({
    'h-[100vh] bg-blend-overlay bg-no-repeat bg-bannerSmall bg-cover flex flex-col justify-end md:justify-center items-center':
      true,
    [`${sectionStylesBg}`]: true
  });

  const elementClasses = classNames({
    [`${elementStyles}`]: true
  });

  const headerClasses = classNames({
    'flex flex-wrap justify-center items-center': true,
    [`${headerStyles}`]: true
  });

  const pClasses = classNames({
    [`${pStyles}`]: true,
    [`${pStylesA}`]: true
  });

  const buttonWrapperClasses = classNames({
    [`${buttonWrapper}`]: true,
    [`${buttonWrapperA}`]: true
  });
  return (
    <section
      className={sectionClasses}
      style={{
        backgroundImage: `url('background.jpeg')`,
        height: 'calc(100vh - 50px)'
      }}
    >
      <div className={elementClasses}>
        <header className={headerClasses}>
          <TextElement htmlTag="p" className={pClasses}>
            MARKETING &
          </TextElement>
          <TextElement htmlTag="p" className={pClasses}>
            DESIGN
          </TextElement>
        </header>
        <div className={buttonWrapperClasses}>
          <Button className="bg-pageYellow buttonDefault">test</Button>
          <Button className="bg-pageWhite buttonDefault">test</Button>
        </div>
      </div>
    </section>
  );
}
