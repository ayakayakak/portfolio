import type { NextPage } from 'next'

/* components */
import { Header, SectionContainer, Top,Skill  } from 'components/organisms'

const Home: NextPage = () => {
  return (
    <>
    <Header onClick={()=>{}} />
    <main>
      <Top />

      <SectionContainer index={0}>
        <Skill/>
      </SectionContainer>
    </main>
    </>
  )
}

export default Home
