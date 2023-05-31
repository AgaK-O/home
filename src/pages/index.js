import * as React from 'react'
import '../components/index.css'
import Layout from '../components/layout/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle={'hello, world'}>
      <p>First thing, then the next.</p>
    </Layout>
  )
}

export const Head = () => (
<>
  <title>Home</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
</>
)

export default IndexPage;
