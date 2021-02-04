import styled from 'styled-components/native';
import { sizes, colors } from '../../Constants';

export const LoanContainer = styled.View`
    align-items: center;
    padding-bottom: ${sizes.space.large}px;
    padding-horizontal: ${sizes.space.large}px;
    background-color: ${colors.background};
`;

export const LoanCard = styled.View`
    flex-direction: row;
    background-color: ${colors.white};
    width: 100%;
    border-radius: 4px;
    padding: ${sizes.space.small}px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    elevation: 5;
`;

export const LoanInfo = styled.View`
    margin-left: ${sizes.space.medium}
`;