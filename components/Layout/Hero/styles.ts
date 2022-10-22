import styled from "styled-components";
import { StringProps, WrapperProps } from "lib/types";
import { Flex } from "components/Layout/Container/styles";
import { devices } from "lib/displayDevice";
import Image from "next/image";

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

export const HeroFlex = styled(Flex)`
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
`;
