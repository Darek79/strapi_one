import { TextElement, HeaderElement, Header, TextRight } from 'components';
import { useInView } from 'react-intersection-observer';
import ideas from 'public/ideasImg.jpg';
import Image from 'next/image';
interface IdeasI {}

const slogan = ['WHERE', 'GREAT', 'IDEAS', 'ARE', 'MADE'];

export default function Ideas(): JSX.Element {
  const { inView, ref } = useInView({
    threshold: 0.6,
    rootMargin: '150px 150px'
  });
  return (
    <section className="w-full bg-pageYellow py-10 lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:w-full lg:gap-8">
        <span ref={ref}>
          <TextRight state={inView} textSizesStyle="h-20 sm:h-24">
            {slogan.map((el, i) => {
              if (i === 1 || i === 2) {
                return (
                  <TextElement
                    className="text-8xl sm:text-[7rem] text-pageWhite leading-[5rem] text-right font-bold"
                    htmlTag="p"
                    key={el}
                  >
                    {el}
                  </TextElement>
                );
              } else {
                return (
                  <TextElement
                    className="text-8xl sm:text-[7rem] text-pageBlack leading-[5rem] text-right font-bold"
                    htmlTag="p"
                    key={el}
                  >
                    {el}
                  </TextElement>
                );
              }
            })}
          </TextRight>
        </span>
        <div className="w-full lg:basis-1/4 lg:pt-1">
          <Header />
        </div>
      </div>
    </section>
  );
}
