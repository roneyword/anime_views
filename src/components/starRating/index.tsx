import { Container } from "./styles";
import { Star } from 'phosphor-react';

interface StarRatingProps {
  rating: number
}

export default function StarRating({ rating }: StarRatingProps) {

  const amountStars = () => {
    let amount = Math.round((rating / 100) * 5);
    const stars = [];

    for (let i = 0; i < amount; i++) {
      stars.push(<Star key={i} size={32} color="#dfef0b" weight="fill" />);
    }

    return stars
  }

  if (!rating) return null;

  return (
    <Container>
      {amountStars()}
      <span className="rating-number">{rating}</span>
    </Container>
  )
}