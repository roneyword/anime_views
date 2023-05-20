import styled from "styled-components";
import { colors } from '../../styles/template/colors'

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
    max-width: 500px;
    height: 150px;

    img{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%, -50%);
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
  @media(max-width: 485px){
    .header-wrapper{

      figure{
        height: 100px;
      }
    }
  }

`