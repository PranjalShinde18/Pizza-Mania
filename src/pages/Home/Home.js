import React from 'react'
import Layout from '../../components/Layouts/Layout.js'
import "../../styles/HomeStyle.css"
import Section1 from './Section1.js'
import Section2 from './Section2.js'
import Section3 from './Section3.js'
import Section4 from './Section4.js'
import Section5 from './Section5.js'

function Home() {
  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

    </Layout>
  )
}

export default Home