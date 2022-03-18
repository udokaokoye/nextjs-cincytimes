import React from 'react'
import { GetPostById } from '../lib/swr-hooks'


const test = ({allPostsData}) => {

  return (
      <>
      <title>{allPostsData[0].title}</title>
    <div>{allPostsData[0].title}</div>
    <a target={'_blank'} href="http://localhost:3000/test">test</a>
      </>
  )
}

export async function getStaticProps() {
    const allPostsData = await fetch('https://api.thecincinnatitimes.com/GET/get_post.php?post_id=623094dee2bb5').then((res) => res.json())
    return {
      props: {
        allPostsData
      }
    }
  }



export default test