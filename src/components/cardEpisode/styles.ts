import styled from 'styled-components';
import { spacings } from '../../styles/template/spacings'
import { colors } from '../../styles/template/colors'
import { borders } from '../../styles/template/border'
import { fontWeights, fontSizes } from '../../styles/template/typographys'

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${spacings.sm};
  margin: 0;
  padding: 0;

  .card-episode{
    max-width: 180px;
    background: #1b0f30;
    background: ${colors.backgroundCard};
    gap: ${spacings.md};
    padding: ${spacings.sm};
    border-radius: ${borders.sm};
    list-style: none;

    figure{
      width: 100%;
      height: auto;
      border-radius: ${borders.sm};
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      figcaption{
        margin: ${spacings.xs} 0px;
        color: ${colors.gray200};
        font-size: ${fontSizes.sl};
        font-weight: ${fontWeights.w400};
      }
    }

    .card-episode-footer{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: ${spacings.xs};
      
      > span{
        color: ${colors.white};
        overflow: auto;
        height: 44px;
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.w600};
      }
    }
  }

  @media(max-width: 811px){
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

    .card-episode{
      max-width: 240px;
    }
  }

  @media(max-width: 617px){
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

    .card-episode{
      max-width: 100%;
    }
  }

  @media(max-width: 433px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    .card-episode{
      max-width: 100%;
    }
  }

`