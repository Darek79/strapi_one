import { useState } from 'react';
import { HeaderElement, TextElement, TextRight, VideoItem } from 'components';

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
  const [state, setState] = useState<boolean>(true);

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
  function change() {
    setState(p => !p);
  }

  return (
    <section className={sectionClasses}>
      {/* <button onClick={change}>click</button> */}
      <div className={divWrapperClasses}>
        <HeaderElement className="flex w-full flex-col justify-center items-center absolute md:static bottom-6 z-10">
          <TextRight state={state}>
            {arr.map(el => (
              <TextElement key={el} className={textColorClasses} htmlTag="h3">
                {el}
              </TextElement>
            ))}
          </TextRight>
        </HeaderElement>
        <VideoItem />
      </div>
    </section>
  );
}
