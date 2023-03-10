import {StringProps} from 'lib/types';
import styled from 'styled-components';
import {devices} from 'lib/displayDevice';
import {COLOR_WHITE} from 'lib/colorPalette';

export const FooterContainer = styled.footer<StringProps>`
  margin: 1rem 2rem 2rem;

  @media ${devices.tabletL} {
    margin: 6rem 3rem 3rem;
  }

  a {
    color: ${COLOR_WHITE};
    transition: all 0.3s;

    &:hover {
      color: ${COLOR_WHITE};
    }
  }

  .active {
    color: ${COLOR_WHITE};
  }
`;

export const GridContainer = styled.div`
  padding-bottom: 1rem;
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media ${devices.tabletM} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const FlexLinks = styled.div`
  flex-direction: column;
  display: flex;

  a {
    margin-top: 1rem;
  }
`;

export const Address = styled.address`
  text-align: right;
  font-style: normal;
  margin-top: 1rem;
`;
