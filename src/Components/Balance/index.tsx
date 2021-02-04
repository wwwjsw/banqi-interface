import React from 'react';

import Typography from '../../Components/Typography';
import { sizes, colors } from '../../Constants';
import Eye from '../../Icons/Eye';

import { BalanceContainer, BalanceAmount} from  './styles';

export default function Balance() {
  return (
    <BalanceContainer>
        <Typography
            color={colors.textBlack}
            fontSize={sizes.font.medium}
            text="Meu saldo:" 
        />
        <BalanceAmount>
            <Typography
                color={colors.textBlack}
                bold
                fontSize={sizes.font.large}
                text="R$ 34,87"
                marginRightMedium
            />
            <Eye />
        </BalanceAmount>
     </BalanceContainer>
  );
}
