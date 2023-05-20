import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Banner from '@/components/banner';
import { Footer, Wrapper } from './styles';
import { Container } from '@/styles/grid';
import { Button, Modal, Skeleton } from 'antd';
import Tags from '@/components/tags';
import StarRating from '@/components/starRating';
import api from '@/api';
import Head from 'next/head'
import CardEpisode from '@/components/cardEpisode';
import toast from '@/utils/toast';

export default function Details({ anime, episodes }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [episodeList, setEpisodeList] = useState(episodes);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [showButtonLoadMore, setShowButtonLoadMore] = useState(false);

  const {
    id,
    img,
    banner,
    title,
    description,
    popularityRanking,
    rating,
    episodeCount,
    youtubeVideoId,
    categories,
  } = anime;

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    try {
      const {data} = await api.get(`/anime/${id}/episodes?page[limit]=10&page[offset]=${offset + 10}`);
  
      if (!data.data.length) {
        setShowButtonLoadMore(false);
        return;
      }

      const episodes = data.data.map((episode: any) => ({
        id: episode.id,
        title: title,
        epTitle: episode.attributes.canonicalTitle,
        epNumber: episode.attributes.number,
        seasonNumber: episode.attributes.seasonNumber,
        img: episode.attributes.thumbnail?.original,
      }));
  
      setEpisodeList([...episodeList, ...episodes]);
      setOffset(offset + 10);
      
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCLose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setShowButtonLoadMore(!(episodeList.length % 10))
  }, [episodeList])

  return (
    <>
      <Head>
        <title>Anime view | Detalhes - {title}</title>
      </Head>

      <Container id={id}>
        <Banner img={banner} description='imagem de fundo do dragon ball gt' />

        <Wrapper>
          <div className='header'>
            {img ? (
              <figure>
                <img src={img} alt={`imagem do ${title}`} />
              </figure>
            ) : (
              <div className="skeleton-container">
                <Skeleton.Image className="skeleton-image"/>
              </div>
            )}

            <div className='header-title'>
              <h2>{title}</h2>
              <Tags tags={categories} />
              <StarRating rating={rating} />

              <span>{popularityRanking ? `${popularityRanking}° Popular ranking` : ''}</span>
              <span>{episodeCount ? `${episodeCount > 1 ? `${episodeCount} Episodes` : `${episodeCount} Episode`}` : ''}</span>

              <Button type="primary" onClick={showModal}>Watch video</Button>
            </div>
          </div>

          <div className='content'>
            <div className='synopsis'>
              <h2>synopsis</h2>
              <p>{description}</p>
            </div>

            <div className='episodes'>
              <CardEpisode cards={episodeList} />
            </div>
          </div>
        </Wrapper>



        <Modal title={title} open={isModalOpen} onCancel={handleCLose} centered footer={false} width='80%' destroyOnClose={true}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            height={'500'}
            width={'100%'}
          >
          </iframe>
        </Modal>

      </Container>

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.slug;
  const defaultImg = "https://animesflix.net/_theme/img/image-header.jpg";

  if (!id) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      }
    }
  }

  const responses = await Promise.all([
    api.get(`/anime/${id}?include=categories,episodes`),
    api.get(`/anime/${id}/categories`),
    api.get(`/anime/${id}/episodes`),
  ]);

  const responseAnime = responses[0]?.data;
  const responseCategories = responses[1]?.data;
  const responseEpisodes = responses[2]?.data;

  const anime = {
    id: responseAnime.data.id,
    title: responseAnime.data.attributes.canonicalTitle,
    description: responseAnime.data.attributes?.description,
    popularityRanking: responseAnime.data.attributes?.popularityRank,
    img: responseAnime.data.attributes.posterImage?.large || null,
    banner: responseAnime.data.attributes.coverImage?.large || defaultImg,
    rating: responseAnime.data.attributes?.averageRating || 0,
    episodeCount: responseAnime.data.attributes.episodeCount,
    youtubeVideoId: responseAnime.data.attributes.youtubeVideoId,
    categories: responseCategories.data
    .filter((included: any) => responseAnime.data.relationships.categories.data
    .map((category: any) => category.id).includes(included.id))
    .map((category: any) => category.attributes.title).slice(0, 3)
  };

  const episodes = responseEpisodes.data.map((episode: any) => ({
    id: episode.id,
    title: responseAnime.data.attributes?.canonicalTitle,
    epTitle: episode.attributes.canonicalTitle,
    epNumber: episode.attributes.number,
    seasonNumber: episode.attributes.seasonNumber,
    img: episode.attributes.thumbnail?.original || defaultImg,
  }));

  return {
    props: {
      anime: anime,
      episodes: episodes
    },
  }
}
