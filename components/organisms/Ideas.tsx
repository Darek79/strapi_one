import { TextElement, HeaderElement, Header } from 'components';
import ideas from 'public/ideasImg.jpg';
import Image from 'next/image';
interface IdeasI {}

const slogan = ['WHERE', 'GREAT', 'IDEAS', 'ARE', 'MADE'];

export default function Ideas(): JSX.Element {
  return (
    <section className=" bg-pageYellow flex flex-col justify-center items-center py-20">
      <div className="">
        {slogan.map((el, i) => {
          if (i === 1 || i === 2) {
            return (
              <TextElement
                className="text-8xl text-pageWhite leading-[5rem] text-right font-bold"
                htmlTag="p"
                key={el}
              >
                {el}
              </TextElement>
            );
          } else {
            return (
              <TextElement
                className="text-8xl text-pageBlack leading-[5rem] text-right font-bold"
                htmlTag="p"
                key={el}
              >
                {el}
              </TextElement>
            );
          }
        })}
      </div>
      <div className="w-full">
        <Header />
        {/* <HeaderElement htmlTag="article">
          <div className="w-full py-6">
            <Image src={ideas} alt="ideas" layout="responsive" sizes="100vw" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <TextElement htmlTag="h3" className="w-3/4 font-bold text-3xl">
              Mixology&nbsp;Campaign
            </TextElement>
            <TextElement htmlTag="p" className="w-3/4">
              Consectetuer adipiscing elit, sed diam nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud .{' '}
            </TextElement>
          </div>
        </HeaderElement> */}
      </div>
    </section>
  );
}
