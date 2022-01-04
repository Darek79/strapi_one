import type { NextPage } from 'next';
import { PageWrapper, SectionWrapper, Navigation } from 'components';
import { PageDefaultContext, PageDefaultObject } from 'context/pageDefaults';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageDefaultContext.Provider value={PageDefaultObject}>
        <PageWrapper>
          <SectionWrapper
            className=" col-start-2 col-end-3 row-start-1 h-[50px] sticky top-0 overflow-hidden"
            htmlTag="nav"
          >
            <Navigation />
          </SectionWrapper>
          <SectionWrapper
            className="col-start-2 col-end-3 row-start-2 h-[200vh]"
            htmlTag="main"
          >
            <div className="h-[calc(100vh-50px)]">main</div>
          </SectionWrapper>
        </PageWrapper>
      </PageDefaultContext.Provider>
    </>
  );
};

export default Home;
