import { useContext } from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
import classnames from 'classnames';

interface SidebarI {
  isOpen?: boolean;
}

export default function Sidebar({ isOpen }: SidebarI): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);
  return (<aside>
    
  </aside>)
}
