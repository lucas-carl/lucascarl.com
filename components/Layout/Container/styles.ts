import styled, {createGlobalStyle} from 'styled-components';

import {StringProps, WrapperProps} from 'lib/types';
import {devices} from 'lib/displayDevice';
import {
    COLOR_BLACK,
    COLOR_DARK_GRAY,
    COLOR_WHITE,
} from 'lib/colorPalette';

export const Flex = styled.div<StringProps>`
  display: flex;
  align-items: ${({align}) => (align ? align : 'center')};
  justify-content: ${({justify}) => (justify ? justify : 'space-between')};
  flex-direction: ${({direction}) => (direction ? direction : 'row')};
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Main = styled.main<WrapperProps>`
  background-color: ${COLOR_DARK_GRAY};
  padding: 2rem;

  @media ${devices.desktopM} {
    margin: 3rem;
  }

  h2 {
    margin-bottom: 4rem;
  }
`;

export const PageGrid = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${devices.desktopM} {
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 2rem;
  }
`;

export const PageSidebar = styled.aside`
  display: flex;  
`;

export const StyledHTML = createGlobalStyle<StringProps>`
  body {
    background-color: ${COLOR_BLACK};

    strong {
      color: ${COLOR_WHITE};

      &:hover {
        text-decoration: none;
        outline: none;
      }
    }

    pre {
      background-color: ${COLOR_DARK_GRAY};
      color: ${COLOR_WHITE};

      strong {
        color: ${COLOR_WHITE};
      }
    }

    button {
      background-color: ${COLOR_WHITE};
      color: ${COLOR_BLACK};
    }

    h2, h5 {
      color: ${COLOR_WHITE};
    }

    a {
      color: ${COLOR_WHITE};
    }

    ul, p, span {
      color: ${COLOR_WHITE};
    }

    a:hover, .active {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 6px;
    }
  }`;
