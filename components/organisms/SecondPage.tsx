import { useState } from 'react';
import { HeaderElement, TextElement, TextRight, VideoItem } from 'components';
import { useInView } from 'react-intersection-observer';

import classname from 'classnames';
interface SecondPageI {
  sectionStylesBg?: string;
  elementStylesWrapper?: string;
  textColorStyles?: string;
}

const arr: string[] = ['CAMPAIGNS', 'MARKETING', 'STRATEGY'];

export default function SecondPage({
  sectionStylesBg = 'bg-pageWhite',
  textColorStyles = 'text-pageWhite md:text-pageBlack'
}: SecondPageI): JSX.Element {
  const { inView, ref } = useInView({
    threshold: 0.6
  });

  const sectionClasses = classname({
    [`${sectionStylesBg}`]: true
  });

  const divWrapperClasses = classname({
    'flex relative overflow-hidden lg:gap-2': true
  });

  const textColorClasses = classname({
    'text-5xl md:text-6xl lg:text-8xl font-bold': true,
    [`${textColorStyles}`]: true
  });

  return (
    <section className={sectionClasses} ref={ref}>
      <div className={divWrapperClasses}>
        <HeaderElement className="flex w-full flex-col justify-center items-center absolute md:static bottom-6 z-10">
          <TextRight state={inView}>
            {arr.map(el => (
              <TextElement key={el} className={textColorClasses} htmlTag="h3">
                {el}
              </TextElement>
            ))}
          </TextRight>
        </HeaderElement>
        <VideoItem state={inView} />
      </div>
    </section>
  );
}
