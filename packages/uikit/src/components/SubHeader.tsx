import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { useAppSdk } from '../hooks/appSdk';
import { useNativeBackButton } from './BackButton';
import { ChevronLeftIcon } from './Icon';
import { H3 } from './Text';
import { BackButton } from './fields/BackButton';

export const WithHeadingDivider = styled.div``;

const Block = styled(WithHeadingDivider)`
    flex-shrink: 0;

    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: relative;

    position: fixed;
    z-index: 3;
    width: var(--app-width);
    overflow: visible !important;
    max-width: 548px;
    top: 0;

    background: ${props => props.theme.backgroundPage};
`;

export const SybHeaderGlobalStyle = createGlobalStyle`
  body:not(.top) ${WithHeadingDivider} {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: ${props => props.theme.separatorCommon};
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
`;

export const BackButtonLeft = styled(BackButton)`
    position: absolute;
    top: 50%;
    margin-top: -1rem;
    left: 1rem;
`;

export interface SubHeaderProps {
    title: React.ReactNode;
}

const Title = styled(H3)`
    margin-top: 1px;
    margin-bottom: 2px;
`;

const SubHeaderBackButton = () => {
    const sdk = useAppSdk();
    const navigate = useNavigate();
    const back = useCallback(() => navigate(-1), [navigate]);
    useNativeBackButton(sdk, back);

    if (sdk.nativeBackButton) {
        return <></>;
    } else {
        return (
            <BackButtonLeft onClick={() => navigate(-1)}>
                <ChevronLeftIcon />
            </BackButtonLeft>
        );
    }
};

export const SubHeader: FC<SubHeaderProps> = ({ title }) => {
    return (
        <Block>
            <SubHeaderBackButton />
            <Title>{title}</Title>
        </Block>
    );
};
