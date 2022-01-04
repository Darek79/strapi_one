import {
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
  WheelEvent
} from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
import { debounce } from 'utils';
import Image from 'next/image';
import logoSvg from 'public/logo.svg';
import hamburgerSvg from 'public/hamburger.svg';
import classnames from 'classnames';

interface NavigationI {
  fontStyles?: string;
  logoStyles?: string;
  listStyles?: string;
  logo?: ReactNode | string;
  sectionStyles?: string;
  hamburgerStyles?: string;
}

export default function Navigation({
  fontStyles = 'font-bold text-slate-50',
  logoStyles = 'w-[50px]',
  listStyles = 'bg-pageDarkGrey',
  sectionStyles = 'h-[100%]',
  hamburgerStyles = 'w-[20px] sm:hidden',
  logo
}: NavigationI): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    window.onwheel = debounce((e: WheelEvent) => {
      console.log(window.scrollY);
      e.deltaY < 0 ? setOpen(true) : setOpen(false);
    }, 300);
  }, []);
  // prettier-ignore
  const sectionClasses = classnames({
    [`${sectionStyles}`]: true,
    'hidden': !open && window.scrollY >100
  });

  const listClasses = classnames({
    'h-[100%] w-[100%] flex': true,
    'gap-4 items-center ml-auto hoverno': true,
    [`${fontStyles}`]: true,
    [`${listStyles}`]: true
  });

  const listItems = classnames({
    'hidden sm:list-item': true
  });

  const logoClass = classnames({
    [`${logoStyles}`]: true,
    'mr-auto': true
  });

  const hamburgerClasses = classnames({
    [`${hamburgerStyles}`]: true
  });

  return (
    <section className={sectionClasses}>
      <ul className={listClasses}>
        {console.log(open)}
        <li className={logoClass}>{logo ? logo : <Image src={logoSvg} />}</li>
        {navigationArr &&
          navigationArr.map(item => (
            <li className={listItems} key={item}>
              {item}
            </li>
          ))}
        <li className={hamburgerClasses}>
          <Image src={hamburgerSvg} alt="hamburger" />
        </li>
      </ul>
    </section>
  );
}
