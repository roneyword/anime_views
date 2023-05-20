import styled from "styled-components";
import { colors } from '../../styles/template/colors'
import { spacings } from '../../styles/template/spacings'
import { fontWeights, fontSizes } from '../../styles/template/typographys'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.sm};

  .rating-number{
    color: ${colors.white};
    font-size: ${fontSizes.md};
    font-weight: ${fontWeights.w900};
  }
`