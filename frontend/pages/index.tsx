import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'
import emailjs, { init } from 'emailjs-com';

/* components */
import { FlashMessage } from 'components/molecules'
import { Header, SectionContainer, Top, About, Skill, Contact, Footer } from 'components/organisms'

/* const, types */
import { APP_NAME, APP_URL, META_DESCRIPTION } from 'const'
import { FlashMessageType } from 'types/myTypes'

const Home: NextPage = () => {
  const [flashMessageType, setFlashMessageType] = useState<FlashMessageType | null>(null)

  const onClickSubmit = (name:string, email:string, body:string): void => {
      init(process.env.EMAILJS_USER_ID ?? '')

      const emailjsServiceId = process.env.EMAILJS_SERVICE_ID ?? ''
      const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID ?? ''

      const templateParams = {
          name,
          email,
          body
      }

      emailjs.send(emailjsServiceId,emailjsTemplateId, templateParams).
      then(()=>{
        setFlashMessageType('success')
      }).catch(() => {
        setFlashMessageType('fail')
      }).finally(() => {
        setTimeout(() => {
          setFlashMessageType(null)
        }, 3000)
      })
  }

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

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
          <Contact onClickSubmit={onClickSubmit} />
        </SectionContainer>
      </main>
      <Footer />
    </>
  )
}

export default Home
