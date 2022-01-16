import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tile } from 'components';
import { ImageProps } from 'next/image';
import mountain from 'public/mountain.jpg';
import { ReactNode } from 'react';
interface ImagePageI {
  bannerArr?: { title: string; src: ImageProps['src'] }[];
  Icon?: ReactNode;
}

const bannerArr = [
  { title: 'COFFEE CO. CAMPAIGN', src: mountain },
  { title: 'FILM / PHOTOGRAPHY', src: mountain },
  { title: 'MARKETING STRATEGY', src: mountain },
  { title: 'AD CAMPAIGN', src: mountain },
  { title: 'AD / MARKETING', src: mountain },
  { title: 'BEAUTY CO. CAMPAIGN', src: mountain }
];

export default function ImagePage(): JSX.Element {
  return (
    <section className="flex sm:flex-wrap flex-col sm:flex-row flex-grow-0 w-full">
      {bannerArr.map(el => (
        <Tile
          link="#"
          title={el.title}
          src={el.src}
          Icon={<ArrowRight />}
          key={el.title}
        />
      ))}
    </section>
  );
}
