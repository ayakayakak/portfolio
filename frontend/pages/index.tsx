import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

/* components */
import { FlashMessage } from 'components/molecules'
import { Header, SectionContainer, Top, About, Skill, Contact, Footer } from 'components/organisms'

/* const, types */
import { APP_NAME, APP_URL, META_DESCRIPTION } from 'const'
import { FlashMessageType } from 'types/myTypes'

const Home: NextPage = () => {
  const [flashMessageType, setFlashMessageType] = useState<FlashMessageType | null>(null)

  const onClickSubmit = () => {
    setFlashMessageType('success')

    setTimeout(() => {
      setFlashMessageType(null)
    }, 3000);
  }

  return (
    <>
      <Head>
        <title>Ayaka Taniguchi</title>
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={APP_URL + '/top.jpg'} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ayakayakayakak" />
      </Head>

      {!!flashMessageType && <FlashMessage type={flashMessageType} />}
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
          <Contact onClickSubmit={onClickSubmit}/>
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}

export default Home
