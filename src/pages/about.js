// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={'About Me'}>
      <p>Frontend developer with an extensive experience in creating and maintaining beautiful and functional
        UI components. Having a solid base as an UI developer I very much enjoy getting deeper into
        JavaScript side of projects, getting to know what makes them tick and improving them.</p>
      <p>I feel strongly about the structure of projects and keeping things organized and easy to follow.
        I’m task-oriented, active in meetings with insightful input, strive to maintain good relations with team
        members.</p>
      <p>Coming from social and culture science I am a great asset for any team bringing out of the box thinking
        and the ability to look at any problem from different perspectives.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About me</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
  </>
)

// Step 3: Export your component
export default AboutPage