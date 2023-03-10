import styled from "styled-components";
import { StringProps, WrapperProps } from "lib/types";
import { Flex } from "components/Layout/Container/styles";
import { devices } from "lib/displayDevice";
import Image from "next/image";

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;
  margin-top: 2rem;

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
    margin-top: 0;
  }
`;

export const HeroImage = styled(Image)`

`;

export const HeroFlex = styled(Flex)`
  margin-top: 2rem;
  margin-bottom: 4rem;
  flex-direction: column-reverse;

  @media ${devices.mobileL} {
    flex-direction: row;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
`;
