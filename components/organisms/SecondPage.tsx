import { HeaderElement, TextElement } from 'components';
import classname from 'classnames';
interface SecondPageI {}

export default function SecondPage(): JSX.Element {
  const TextHClasses = classname({
    'textSizes font-bold text-pageWhite': true
  });
  return (
    <section className="bg-pageDarkGrey flex flex-col justify-center items-start h-[100vh]">
      <div className="relative">
        <HeaderElement className="flex flex-col justify-center items-start absolute bottom-2">
          <TextElement
            className="textSizes font-bold text-pageWhite"
            htmlTag="h3"
          >
            CAMPAIGNS
          </TextElement>
          <TextElement className={TextHClasses} htmlTag="h3">
            MARKETING
          </TextElement>
          <TextElement className={TextHClasses} htmlTag="h3">
            STRATEGY
          </TextElement>
          <TextElement
            className="text-1xl md:text-8xl lg:text-9xl mt-4 text-pageWhite"
            htmlTag="p"
          >
            Consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud .{' '}
          </TextElement>
        </HeaderElement>
        <video loop={true} autoPlay={true}>
          <source src="woman.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
}
