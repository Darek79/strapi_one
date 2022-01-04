import { useContext, memo } from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
import classnames from 'classnames';

interface SidebarI {
  isOpen?: boolean;
  asideStyles?: string;
}

export default memo(function Sidebar({
  isOpen = false,
  asideStyles = 'bg-pageDarkGrey'
}: SidebarI): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);

  const asideClasses = classnames({
    [`${asideStyles}`]: true,
    'flex justify-center md:hidden fixed h-[100vh] w-[100%] transition-all translate-x-[100vw]':
      !isOpen
  });
  return (
    <aside className={asideClasses}>
      <ul>
        {navigationArr &&
          navigationArr?.map((item, i) => <li key={item + i}>{item}</li>)}
      </ul>
    </aside>
  );
});
