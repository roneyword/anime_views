import styled from "styled-components";
import { spacings } from '../../styles/template/spacings'
import { colors } from '../../styles/template/colors'
import { borders } from '../../styles/template/border'
import { fontWeights, fontSizes } from '../../styles/template/typographys'

export const Container = styled.div`
  display: flex;
  gap: ${spacings.sm};

  .tag{
    background: ${colors.gray100};
    padding: ${spacings.sm};
    border-radius: ${borders.sm};

    strong{
      color: ${colors.white};
      font-size: 0.8rem;
      font-size: ${fontSizes.sm};
      font-weight: ${fontWeights.w400};
    }
  }
`