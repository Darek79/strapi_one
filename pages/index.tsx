import type { NextPage } from 'next';
import { SectionWrapper, Navigation } from 'components';
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
        <SectionWrapper className="" htmlTag="nav">
          <Navigation />
          <div>test</div>
        </SectionWrapper>
        <SectionWrapper className="" htmlTag="main">
          <div>main</div>
        </SectionWrapper>
      </PageDefaultContext.Provider>
    </>
  );
};

export default Home;
