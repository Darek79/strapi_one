import { HeaderElement, TextElement } from 'components';
import classname from 'classnames';
interface SecondPageI {}

export default function SecondPage(): JSX.Element {
  const TextHClasses = classname({
    'textSizes font-bold text-pageWhite': true
  });
  return (
    <section className="bg-pageWhite">
      <div className="flex justify-center items-end lg:items-center relative">
        <HeaderElement className="flex flex-col justify-center items-start absolute md:static bottom-2">
          <TextElement
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-pageWhite md:text-pageBlack"
            htmlTag="h3"
          >
            CAMPAIGNS
          </TextElement>
          <TextElement
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-pageWhite md:text-pageBlack"
            htmlTag="h3"
          >
            MARKETING
          </TextElement>
          <TextElement
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-pageWhite md:text-pageBlack"
            htmlTag="h3"
          >
            STRATEGY
          </TextElement>
          <TextElement
            className="text-1xl md:text-3xl lg:text-3xl my-4 text-pageWhite md:text-pageBlack break-words sm:w-3/4 md:w-full lg:w-[90%]"
            htmlTag="p"
          >
            Consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            veniam, quis nostrud&nbsp;.{' '}
          </TextElement>
        </HeaderElement>
        <video
          className="w-full md:w-1/2 "
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src="woman.mp4" type="video/mp4"></source>
        </video>
      </div>
    </section>
  );
}
