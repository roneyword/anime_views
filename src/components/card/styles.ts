import styled from 'styled-components';
import { spacings } from '../../styles/template/spacings'
import { colors } from '../../styles/template/colors'
import { borders } from '../../styles/template/border'
import { fontWeights, fontSizes } from '../../styles/template/typographys'

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: ${spacings.sm};
  padding: 250px 0 0 0;
  margin: 0;

  li{
    list-style: none;
    max-width: 232px;
    
    &:hover{
      .card-header{
        cursor: pointer;
        
        img{
          transform: scale(1.2);
          filter: blur(3px);
          opacity: 0.8;
        }

        figcaption{
          bottom: 0px;
        }
      }
    }

    .skeleton-container{
      background:#FFFFFF40;
      border-radius: 4px;
      margin-bottom: ${spacings.sm};
      
      .skeleton-image{
        width: 100%;
        height: 330px;
      }
    }

    .card-header{
      position: relative;
      width: 100%;
      height: auto;
      margin-bottom: ${spacings.sm};
      line-height: 0;
      border-radius: ${borders.sm};
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
        transition: all 0.3s linear;
      }

      figcaption{
        position: absolute;
        bottom: -100%;
        left: 50%;
        width: 80%;
        padding: ${spacings.md};
        text-align: center;
        color: rgba(255,255,255, 0.7);
        font-weight: ${fontWeights.w400};
        border-radius: ${borders.sm};
        background: rgba(255,255,255, 0.3);
        transform: translate(-50%, -50%);
        transition: all 0.3s linear;
      }
    }

    .card-content{
      h2{
        color: ${colors.white};
        font-size: ${fontSizes.ls};
        font-weight: ${fontWeights.w600};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

  }

  @media(max-width: 779px){
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    li{
      .card-content{
        h2{
          font-size: ${fontSizes.md};
        }
      }
    }
  }
  @media(max-width: 683px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  @media(max-width: 485px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 180px 0 0 0;

    li{
      .card-content{
        h2{
          font-size: ${fontSizes.sm};
        }
      }
    }
  }
`