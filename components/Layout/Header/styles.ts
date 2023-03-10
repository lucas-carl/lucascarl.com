import styled from "styled-components";
import { StringProps, WrapperProps } from "lib/types";
import { devices } from "lib/displayDevice";
import { COLOR_BLACK, COLOR_WHITE } from "lib/colorPalette";

import { Flex } from "components/Layout/Container/styles";

export const StickyNav = styled.nav<StringProps>`
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: ${COLOR_BLACK};

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

  button {
    padding: 0.75rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: ${COLOR_WHITE}
`;

export const Wrapper = styled(Flex)<WrapperProps>`
  position: relative;
  padding: 2rem 0;

  a:not(:first-child) {
    padding: 1rem;
  }

  a:first-child {
    padding-right: 1rem;
  }

  a:last-child {
    display: none;
  }

  @media ${devices.mobileL} {
    a:last-child {
      display: inline;
    }
  }
`;
