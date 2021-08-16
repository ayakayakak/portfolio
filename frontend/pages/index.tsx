import type { NextPage } from 'next'
import Head from 'next/head'

/* components */
import { Header, SectionContainer, Top, About, Skill, Contact } from 'components/organisms'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Ayaka Taniguchi</title>
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
