import { createContext, ReactNode } from 'react';

export interface PageDefaultsI {
  navigationArr?: string[];
}

export const PageDefaultObject = {
  navigationArr: ['HOME', 'PRODUCTS', 'PRICES', 'ABOUT US']
};

export const PageDefaultContext = createContext<PageDefaultsI>({});

// export default function PageDefaultProvider({
//   children
// }: PageDefaultProviderI) {
//   return (
//     <PageDefaultContext.Provider
//       value={{ navigationArr: ['HOME', 'PRODUCTS', 'PRICES', 'ABOUT US'] }}
//     >
//       {children}
//     </PageDefaultContext.Provider>
//   );
// }
