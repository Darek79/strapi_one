import type { NextPage } from 'next';
import { useEffect } from 'react';
import {
  PageWrapper,
  SectionWrapper,
  Navigation,
  FrontPage,
  SecondPage,
  ImagePage,
  Ideas
} from 'components';
import { PageDefaultContext, PageDefaultObject } from 'context/pageDefaults';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  useEffect(() => {
    const data = fetch('/api/hello');
    data.then(d => d.json()).then(d => console.log(d));
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageDefaultContext.Provider value={PageDefaultObject}>
        <PageWrapper>
          <Navigation />

          <SectionWrapper
            className="col-start-2 col-end-3 row-start-2 bg-red-400"
            htmlTag="main"
          >
            <FrontPage />
            <SecondPage />
            <ImagePage />
            <Ideas />
            <div className="h-[calc(100vh)]">main</div>
          </SectionWrapper>
        </PageWrapper>
      </PageDefaultContext.Provider>
    </>
  );
};

export default Home;
