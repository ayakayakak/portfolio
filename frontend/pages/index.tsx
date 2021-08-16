import type { NextPage } from 'next'
import Head from 'next/head'

/* components */
import { Header, SectionContainer, Top, About, Skill, Contact } from 'components/organisms'

/* const */
import { APP_NAME, APP_URL, META_DESCRIPTION } from 'const'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />
        <title>Ayaka Taniguchi</title>
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={APP_URL + '/profile.jpg'} />
        <meta property="og:site_name" content={APP_NAME} />
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
