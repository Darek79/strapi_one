import { useContext, memo, Dispatch, SetStateAction } from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
import closingX from 'public/closingX.svg';
import Image from 'next/image';
import classnames from 'classnames';

interface SidebarI {
  isOpen?: boolean;
  closeModal?: () => void;
  asideStylesClosed?: string;
  asideStylesOpen?: string;
  asideBgColor?: string;
}

export default memo(function Sidebar({
  isOpen,
  closeModal,
  asideStylesClosed = 'fixed top-0 justify-center md:hidden h-[100vh] w-[100%] transition-all translate-x-[100vw]',
  asideStylesOpen = 'fixed top-0 z-20 justify-center md:hidden h-[100vh] w-[100%] transition-all',
  asideBgColor = 'bg-pageDarkGrey'
}: SidebarI): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);

  const asideClasses = classnames({
    [`${asideBgColor}`]: true,
    [`${asideStylesClosed}`]: !isOpen,
    [`${asideStylesOpen}`]: isOpen
  });

  return (
    <section className={asideClasses}>
      <div
        className="w-[100%] h-[50px] flex items-center px-[10px] justify-end hover:cursor-pointer"
        onClick={closeModal}
      >
        <Image width={25} height={25} alt="closingX" src={closingX} />
      </div>
      <ul>
        {navigationArr &&
          navigationArr?.map((item, i) => <li key={item + i}>{item}</li>)}
      </ul>
    </section>
  );
});
