import Link from "next/link";
import { CardContainer } from "./styles";
import { Skeleton } from "antd";

interface CardsProps {
  cards: Array<CardItensProps>
}

interface CardItensProps {
  id: string,
  img: string,
  title: string,
}

export default function Card({ cards }: CardsProps) {
  return (
    <CardContainer>
      {cards.map(card => (
        <li key={card.id} title={card.title}>
          <article>
            <Link href={`/details/${card.id}`}>
              {card.img ? (
                <figure className="card-header">
                  <img src={card.img} alt={card.title} />

                  <figcaption>Detalhes</figcaption>
                </figure>
              ) : (
                <div className="skeleton-container">
                  <Skeleton.Image className="skeleton-image"/>
                </div>
              )}
            </Link>

            <div className="card-content">
              <h2>{card.title}</h2>
            </div>
          </article>
        </li>
      ))}
    </CardContainer>

  )
}