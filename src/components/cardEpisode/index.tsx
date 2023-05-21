import { Button, Modal } from "antd";
import { CardContainer, ModalContent } from "./styles";
import { useEffect, useState } from "react";

interface CardsProps {
  cards: Array<CardItensProps>
}

interface CardItensProps {
  id: number,
  title: string,
  epTitle: string,
  synopsis: string,
  airDate: string,
  epNumber: string,
  seasonNumber: string,
  img: string,
}

export default function CardEpisode({ cards }: CardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [episodeSelected, setEpisodeSelected] = useState<CardItensProps | undefined>(undefined);
  const [dimensions, setDimensions] = useState(0)

  if (!cards.some(card => card.seasonNumber && card.epNumber && card.img)) {
    return (
      <>
        <h2>Episodes</h2>
        <span>Episodes not available.</span>
      </>
    )
  };

  const showModal = (episodeId: number) => {
    const episode = cards.find(episode => episode.id === episodeId);

    setIsModalOpen(!!episode);
    setEpisodeSelected(episode);
  };

  const handleCLose = () => {
    setIsModalOpen(false);
    setEpisodeSelected(undefined);
  };

  const handleResize = () => {
    setDimensions(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })


  return (
    <>
      <h2>Episodes</h2>
      <CardContainer>
        {cards.map(card => card.seasonNumber && card.epNumber && card.img && (
          <li className="card-episode" key={card.id}>

            <figure>
              <img src={card.img} alt="" />

              <figcaption>{card.title}</figcaption>
            </figure>

            <div className='card-episode-footer'>
              <span>{card.seasonNumber} x {card.epNumber} - {card.epTitle}</span>

              <Button type="primary" onClick={() => showModal(card.id)}>Detalhes</Button>
            </div>
          </li>
        ))}
      </CardContainer>

      <Modal
        title={`(${episodeSelected?.seasonNumber} x ${episodeSelected?.epNumber}) ${episodeSelected?.epTitle}`}
        open={isModalOpen}
        onCancel={handleCLose}
        centered
        footer={false}
        width={dimensions <= 1020 ? '80%' : '40%'}
        destroyOnClose={true}
      >
        {episodeSelected?.synopsis ? (
          <ModalContent>
            <h1 className="modal-title">{episodeSelected?.synopsis}</h1>
            <p className="modal-air-date"><span>Air date:</span>{episodeSelected?.airDate}</p>
          </ModalContent>
        ) : (
          <ModalContent>
            <h1 className="modal-title">Content not found.</h1>
          </ModalContent>
        )}
      </Modal>
    </>

  )
}