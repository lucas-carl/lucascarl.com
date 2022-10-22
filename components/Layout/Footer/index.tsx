import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
  Address,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />

          <GridContainer>
            <FlexLinks>
              <ExternalLink href="tel:04915778833521">
                +49 157 7 8833521
              </ExternalLink>
              <ExternalLink href="mailto:aliciakippels96@gmail.com">
                aliciakippels96@gmail.com
              </ExternalLink>
            </FlexLinks>
            <div />
            <FlexLinks>
              <Address>
                Kempenerstr. 52, 50733 Köln
              </Address>
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
