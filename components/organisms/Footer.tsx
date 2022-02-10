import { FooterCategory, FooterDivider, TextElement } from 'components';

const items1 = [
  'OUR AGENCY',
  'WHO WE ARE',
  'WE MAKE DESIGN',
  'CLIENTS',
  'PORTOFOLIO'
];

const items2 = ['ABOUT US', 'PRODUCTION', 'THE PROCESS', 'MEET THE TEAM'];

interface FooterI {}

export default function Footer(): JSX.Element {
  return (
    <section>
      <section className="py-4 flex justify-between sm:justify-start sm:gap-4">
        <FooterCategory categoryItems={items1} />
        <FooterDivider />
        <FooterCategory categoryItems={items2} />
      </section>
      <TextElement
        htmlTag="p"
        className="text-footer-textWhite text-center sm:text-left"
      >
        ALL RIGHTS RESERVED 2020 - 2025
        <br />
        NEW YOR CITY, USA
      </TextElement>
    </section>
  );
}
