import React from "react"
import Splash from '../components/Splash.js';
import Giglist from '../components/Giglist.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../layout/global.css';

export default ({ data }) => (
  <ParallaxProvider>
    <Splash />
    <Giglist edges={data.allMarkdownRemark.edges} />
  </ParallaxProvider>
)
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title path date address link description
          }
        }
      }
    }
  }
`
