import React from 'react'
import { Banner,Service,Industries, Cases, Counters, DataCenter, Getintouch } from '../components'
const index = () => {
  return (
    <div>
      <Banner />
      <Counters/>
      <Service />
      <Getintouch/>
      <Industries/>
      <Cases />
      <DataCenter/>
    </div>
  )
}

export default index