import React from 'react'
import { Banner,Service,Industries, Cases, Counters, DataCenter, Getintouch,ClinetsLogo,ContactForm, DataCounts } from '../components'
const index = () => {
  return (
    <div>
      <Banner />
      <Counters/>
      <Service />
      <Getintouch/>
      <Industries/>
      <DataCounts/>
      <Cases />
      <DataCenter/>
      <ClinetsLogo/>
      <ContactForm/>
    </div>
  )
}

export default index