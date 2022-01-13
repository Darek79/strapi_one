import { TextElement } from 'components';
interface IdeasI {}

const slogan = ['WHERE', 'GREAT', 'IDEAS', 'ARE', 'MADE'];

export default function Ideas(): JSX.Element {
  return (
    <section className="h-screen bg-pageYellow flex flex-col justify-center items-center">
      <div>
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
      <div></div>
    </section>
  );
}
