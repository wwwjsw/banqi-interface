import React from 'react';

import Typography from '../../Components/Typography';
import { sizes, colors } from '../../Constants';
import LoanHand from '../../Icons/LoanHand';

import { LoanContainer, LoanCard, LoanInfo } from  './styles';

export default function Loan() {
  return (
    <LoanContainer>
        <LoanCard>
            <LoanHand />
            <LoanInfo>
                <Typography
                    color={colors.textBlack}
                    bold
                    fontSize={sizes.font.medium}
                    text="Empréstimo pessoal" 
                    />
                <Typography
                    color={colors.textBlackOpacity}
                    fontSize={sizes.font.small}
                    text="Você tem R$ 500 pré-aprovados!" 
                    />
            </LoanInfo>
        </LoanCard>
     </LoanContainer>
  );
}
