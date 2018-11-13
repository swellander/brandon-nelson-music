import React from "react"
import Header from '../components/Header';
import Splash from '../components/Splash';
import Music from '../components/Music';
import Giglist from '../components/Giglist';
import Photos from '../components/Photos';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../layout/global.css';

export default ({ data }) => (
  <ParallaxProvider>
    <Header splash={true} />
    <Splash />
    <Music />
    <Giglist edges={data.allMarkdownRemark.edges} />
    <Photos />
    <Contact />
    <Footer />
  </ParallaxProvider>
)
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title path date address link description venue
          }
        }
      }
    }
  }
`
