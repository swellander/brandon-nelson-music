import React from "react"
import Splash from '../components/Splash';
import GigList from '../components/GigList';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../layout/global.css';

export default ({ data }) => (
  <ParallaxProvider>
    <Splash />
    <GigList edges={data.allMarkdownRemark.edges} />
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
