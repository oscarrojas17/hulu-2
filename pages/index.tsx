import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Nav from "../components/Nav"
import Results from "../components/Results"
import requests from "../utils/requests"


/* Im destructuring results by replacing home(props) w ( {results} ) */
/* Now i have a results component which takes my array of props and we render our frontend on <Results /> */

export default function Home({results}) {
  
  return (
    <div>
      <Head>
        <title>Hulu</title>
      
      </Head>
      
      <Header />
      <Nav />
      <Results results={results}/>
      
    </div>
    
    
  )
}

/* This gets executed ->export async funct before the code up in the server */
/* We are pulling the genre from url, we are applying the query when we press on those elements*/

/* We are going to make a request with request to the DB*/
  /* || if it is not defined the url, then go to trending by default*/


export async function getServerSideProps(context) {
  
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ). then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}

