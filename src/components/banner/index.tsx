import { Container } from "./styles";

interface BannerProps {
  img?: string,
  description?: string
}

const imgDefault = "https://animesflix.net/_theme/img/image-header.jpg"
const descriptionDefault = "imagem de fundo com varios desenhos de animes"

export default function Banner({ img = imgDefault, description = descriptionDefault }: BannerProps) {

  return (
    <Container>
      <img loading="lazy" src={img} alt={description} />
    </Container>
  )
}