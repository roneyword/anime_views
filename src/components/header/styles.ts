import styled from "styled-components";
import { colors } from '../../styles/template/colors'
import { spacings } from '../../styles/template/spacings'

export const HeaderContainer = styled.header`
position: absolute;
top: 0;
z-index: 10;
width: 100%;
height: 120px;

.header-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  figure{
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: ${spacings.md} 0;
    line-height: 0;

    img{
      width: 100%;
      height: auto;
    }
  }

  .input-wrapper{
    display: flex;
    justify-content: center;
    width: 50%;

    input[disabled]{
      background-color: ${colors.gray300};
    }

    button {
      margin-left: 4px;
      width: 120px;
    }
  }
}

  @media(max-width: 779px){
    .header-wrapper{

      .input-wrapper{
        width: 100%;

        button {
          margin-left: 4px;
        }
      }
    }
  }
`