import type { NextPage } from 'next'

/* components */
import { Header, SectionContainer, Top,About,Skill,Contact  } from 'components/organisms'

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <main>
      <Top />

      <SectionContainer index={0}>
        <About/>
      </SectionContainer>

      <SectionContainer index={1}>
        <Skill/>
      </SectionContainer>

      <SectionContainer index={2}>
        <Contact/>
      </SectionContainer>
    </main>
    </>
  )
}

export default Home
