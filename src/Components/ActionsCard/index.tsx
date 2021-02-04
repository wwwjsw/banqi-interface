import React from 'react'
import { colors, sizes } from '../../Constants';

import Pix from '../../Icons/Pix';
import Typography from '../Typography';

import { ActionsCardContainer } from './styles'

interface IActionsCard {
  isNotLast: boolean;
}

const ActionsCard = (props: IActionsCard) => {
  const { isNotLast } = props
  return (
    <ActionsCardContainer marginRightSmall={isNotLast}>
      <Pix />
      <Typography color={colors.textBlack} fontSize={sizes.font.medium} bold text="PIX" />
    </ActionsCardContainer>
  );
}

export default ActionsCard
