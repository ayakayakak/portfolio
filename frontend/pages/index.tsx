import type { NextPage } from 'next'
import Head from 'next/head'

/* components */
import { Header, SectionContainer, Top, About, Skill, Contact } from 'components/organisms'

const Home: NextPage = () => {
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  const ogpImg = require('./../public/top.jpg')
  return (
    <>
      <Head>
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />
        <title>Ayaka Taniguchi</title>
        <meta property="og:title" content="Ayaka Taniguchi" />
        <meta property="og:description" content="Ayaka Taniguchi's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayakatani.com/" />
        <meta property="og:image" content={ogpImg} />
        <meta property="og:site_name" content="Ayaka Taniguchi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ayakayakayakak" />
      </Head>

      <Header />
      <main>
        <Top />

        <SectionContainer index={0}>
          <About />
        </SectionContainer>

        <SectionContainer index={1}>
          <Skill />
        </SectionContainer>

        <SectionContainer index={2}>
          <Contact />
        </SectionContainer>
      </main>
    </>
  )
}

export default Home
