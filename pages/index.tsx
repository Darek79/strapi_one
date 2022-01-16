import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
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

const DynamicSecondPage = dynamic(
  () => import('components/organisms/SecondPage')
);

const state = false;

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="woman.mp4" type="video/mp4"></link>
      </Head>
      <PageDefaultContext.Provider value={PageDefaultObject}>
        <PageWrapper>
          <Navigation />

          <SectionWrapper
            className="col-start-2 col-end-3 row-start-2 bg-red-400"
            htmlTag="main"
          >
            <FrontPage />
            {/* {state ? <DynamicSecondPage /> : null} */}
            <DynamicSecondPage />
            {/* <SecondPage /> */}
            <ImagePage />
            <Ideas />
            <div className="h-[calc(100vh)]">main</div>
          </SectionWrapper>
        </PageWrapper>
      </PageDefaultContext.Provider>
      <div id="portal" />
    </>
  );
};

export default Home;
