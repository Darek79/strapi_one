import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'components';
import { ImageProps } from 'next/image';
import mountain from 'public/mountain.jpg';
interface ImagePageI {
  src: ImageProps['src'][];
}

const bannerArr = [
  'COFFEE CO. CAMPAIGN',
  'FILM / PHOTOGRAPHY',
  'MARKETING STRATEGY',
  'AD CAMPAIGN',
  'AD / MARKETING',
  'BEAUTY CO. CAMPAIGN'
];

export default function ImagePage(): JSX.Element {
  return (
    <section className="flex sm:flex-wrap flex-col sm:flex-row flex-grow-0 w-full">
      {bannerArr.map(el => (
        <Link href="#">
          <div className="basis-1/2 md:basis-1/3 relative">
            <p className="absolute z-10 p-4 m-4 text-1xl lg:text-2xl bg-pageWhite">
              {el}
            </p>
            <Image layout="responsive" sizes="100vw" src={mountain} />
            <div className="absolute bottom-0 right-0 p-4">
              <ArrowRight />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
