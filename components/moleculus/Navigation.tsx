import {
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef,
  WheelEvent
} from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
import { Aside } from 'components';
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
  sectionStyles = 'h-[100%] transition-all translate-y-0 duration-300',
  hamburgerStyles = 'w-[20px] sm:hidden',
  logo
}: NavigationI): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);
  const [open, setOpen] = useState<boolean>(true);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (!sidebar) {
      window.onwheel = debounce((e: WheelEvent) => {
        console.log(window.scrollY);
        e.deltaY < 0 ? setOpen(true) : setOpen(false);
      }, 300);
    }
  }, [sidebar]);

  function sidebarOpener() {
    setSidebar(p => !p);
  }

  const sectionClasses = classnames({
    [`${sectionStyles}`]: open,
    'h-[100%] transition-all -translate-y-14 duration-300': !open
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
    [`${hamburgerStyles}`]: true,
    'hover:cursor-pointer': true
  });

  return (
    <section className={sectionClasses}>
      <Aside isOpen={sidebar} />
      <ul className={listClasses}>
        {console.log(open)}
        <li className={logoClass}>
          {logo ? logo : <Image alt="logo" src={logoSvg} />}
        </li>
        {navigationArr &&
          navigationArr.map(item => (
            <li className={listItems} key={item}>
              {item}
            </li>
          ))}
        <li className={hamburgerClasses} onClick={sidebarOpener}>
          <Image src={hamburgerSvg} alt="hamburger" />
        </li>
      </ul>
    </section>
  );
}
