import type { NextPage } from 'next'

/* components */
import { Header, SectionContainer, Top,About,Skill  } from 'components/organisms'

const Home: NextPage = () => {
  return (
    <>
    <Header onClick={()=>{}} />
    <main>
      <Top />

      <SectionContainer index={0}>
        <About/>
      </SectionContainer>

      <SectionContainer index={1}>
        <Skill/>
      </SectionContainer>
    </main>
    </>
  )
}

export default Home
