import { useContext } from 'react';
import { PageDefaultContext } from 'context/pageDefaults';
interface NavigationI {
  navItems: string[];
}

export default function Navigation(): JSX.Element {
  const { navigationArr } = useContext(PageDefaultContext);

  return (
    <ul className="flex h-5 bg-pageDarkGrey">
      {navigationArr && navigationArr.map(item => <li>{item}</li>)}
    </ul>
  );
}
