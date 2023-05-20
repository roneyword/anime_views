import React from 'react';
import { GetStaticProps } from 'next';
import HomePage from '@/pages/home';
import api from '@/api';

export interface AnimeProps {
  id: string,
  title: string,
  img: string,
}

export interface AnimeListProps {
  animes: Array<AnimeProps>;
}

export default function Home({animes}: AnimeListProps) {
  return (
    <HomePage animes={animes}/>
  )
}

export const getStaticProps:GetStaticProps = async () => {
    const {data} = await api.get("/anime?page[limit]=18");
    
    const animes = data.data.map((anime: any) => ({
      id: anime.id,
      title: anime.attributes.canonicalTitle,
      img: anime.attributes.posterImage?.large,
    }))

    return {
      revalidate: 60 * 5, // 5 minutes
      props: {
        animes: animes
      }
    }
  }
