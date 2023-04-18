// Step 1: Import React
import * as React from 'react'
import '../components/index.css'
import Layout from '../components/layout/layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={'hello, world'}>
      <p>First thing, then the next.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
<>
  <title>Home</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
</>
)

// Step 3: Export your component
export default IndexPage;
