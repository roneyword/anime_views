import React, { ChangeEvent, useEffect, useState } from 'react';
import Card from '@/components/card';
import { Container } from '@/styles/grid';
import { ContainerHome, Footer } from './styles';
import Banner from '@/components/banner';
import Header from '@/components/header';
import api from '@/api';
import CardSkeleton from '@/components/skeletons/cardSkeletons';
import toast from '@/utils/toast';
import { AnimeListProps } from '../index.page';
import { Button } from 'antd';

export default function Home({ animes }: AnimeListProps) {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState(animes);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showButtonLoadMore, setShowButtonLoadMore] = useState(false);
  const [offset, setOffset] = useState(0);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = async () => {
    setOffset(0);
    setIsLoading(true);
    try {
      let params = `filter[text]=${search}`;

      if (!search) {
        params = "";
      }

      const {data} = await api.get(`/anime?${params}&page[limit]=18`);
      
      if (!data.data.length) {
        toast({
          type: "error",
          text: "Nenhum anime encontrado", 
          duration: 5000
        });
        return;
      }
  
      const animes = data.data.map((anime: any) => ({
        id: anime.id,
        title: anime.attributes.canonicalTitle,
        img: anime.attributes.posterImage?.large,
      }))
  
      setAnimeList(animes);
      
    } catch (error) {
      toast({
        type: "error",
        text: "Falha ao efetuar busca", 
        duration: 5000
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    try {
      let filter = "";
      if (search) filter += `&filter[text]=${search}&`;

      const {data} = await api.get(`/anime?${filter}page[limit]=18&page[offset]=${offset + 18}`);
      
      if (!data.data.length) {
        toast({
          type: "error",
          text: "Nenhum anime encontrado", 
          duration: 5000
        });
        return;
      }
  
      const animes = data.data.map((anime: any) => ({
        id: anime.id,
        title: anime.attributes.canonicalTitle,
        img: anime.attributes.posterImage?.large,
      }))
  
      setAnimeList([...animeList, ...animes]);
      setOffset(offset + 18);
      
    } catch (error) {
      toast({
        type: "error",
        text: "Falha ao efetuar busca", 
        duration: 5000
      });
    } finally {
      setIsLoadingMore(false);
    }    
  }

  useEffect(() => {
    setShowButtonLoadMore(!(animeList.length % 18))
  }, [animeList])

  return (
    <>
      <Header
        value={search}
        onChange={onChange}
        onClick={handleSearch}
        isLoading={isLoading}
      />

      <ContainerHome>
        <Banner description='imagem de fundo com varios desenhos de animes.' />
        <Container>
          {isLoading ? <CardSkeleton /> : <Card cards={animeList}/>}
        </Container>
      </ContainerHome>

      {showButtonLoadMore && (
        <Footer>
          <Button 
            type="primary"
            shape="round"
            loading={isLoadingMore}
            onClick={handleLoadMore}
          >
            See more
          </Button>
        </Footer>
      )}
    </>
  )
}