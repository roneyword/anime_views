import styled from 'styled-components';
import { spacings } from '../../styles/template/spacings'
import { borders } from '../../styles/template/border'
import { colors } from '../../styles/template/colors'
import { fontWeights, fontSizes } from '../../styles/template/typographys'

interface ILogoContainerProps {
  isMobile: boolean;
}

export const Wrapper = styled.div`
  margin-top: 50px;
  padding-top: 250px;

  .header{
    display: flex;
    gap: ${spacings.md};
    margin-bottom: 50px;

    figure{
      width: 250px;
      height: auto;
      border-radius: ${borders.md};
      line-height: 0;
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
      }
    }

    .skeleton-container{
      background:#FFFFFF40;
      border-radius: 4px;
      margin-bottom: ${spacings.sm};
      
      .skeleton-image{
        width: 250px;
        height: 354px;
      }
    }

    .header-title{
      display: flex;
      flex-direction: column;
      gap: ${spacings.sm};
      align-self: flex-end;
      margin: ${spacings.sm} 0px;

      h2{
        max-width: 500px;
        width: 100%;
        color: ${colors.white};
        font-size: ${fontSizes.xx};
        font-weight: ${fontWeights.w600};
      }

      p{
        color: ${colors.white};
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights.w100};
      }

      > span{
        height: 1.125rem;
        color: ${colors.white};
        font-size: ${fontSizes.sm};
      }
    }
   
  }

  .content{
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .synopsis{
      h2{
        text-transform: uppercase;
        color: ${colors.white};
        font-size: ${fontSizes.xl};
        font-weight: ${fontWeights.w600};
        margin-bottom: ${spacings.md};
      }
      p{
        line-height: 1.5;
        color: ${colors.white};
        font-size: ${fontSizes.ml};
        font-weight: ${fontWeights.w100};
      }
    }

    .episodes{
      h2{
        text-transform: uppercase;
        color: ${colors.white};
        font-size: ${fontSizes.xl};
        font-weight: ${fontWeights.w600};
        margin: ${spacings.md} 0;
      }
    }
  }

  iframe{
    width: 100%;
    height: 100%;
  }

  @media(max-width: 785px){
    .header{
      flex-direction: column;

      figure{
        position: relative;
        width: 100%;
        height: 250px;

        img{
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
      }

      .header-title{
        width: 100%;
      }
    }
  }

  @media(max-width: 485px){
    padding-top: ${spacings.md};

    .header{
      gap: ${spacings.sm};
      margin-bottom: ${spacings.sm};
      .header-title{
        h2{
          font-size: ${fontSizes.xl};
        }
      }
    }

    .content{
      display: flex;
      flex-direction: column;
      gap: ${spacings.sm};
      
      .synopsis, .episodes{
        h2{
          font-size: ${fontSizes.lg};
          gap: ${spacings.sm};
        }
      }
    }
  }
`;

export const LogoContainer = styled.div<ILogoContainerProps>`
  position: absolute;
  top: ${({isMobile}) => isMobile ? '10px' : 0};
  cursor: pointer;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  button {
    width: 150px;
    font-weight: 700;
  }
`;