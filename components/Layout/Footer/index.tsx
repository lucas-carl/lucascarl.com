import {ExternalLinkProps} from 'lib/types';

import {Flex, StyledContainer} from 'components/Layout/Container/styles';
import {
    FooterContainer,
    GridContainer,
    FlexLinks,
    Address,
} from 'components/Layout/Footer/styles';

const ExternalLink = ({href, children}: ExternalLinkProps) => (
    <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
    </a>
);

export const Footer = () => {
    return (
        <FooterContainer>
            <StyledContainer>
                <Flex justify="center" direction="column">
                    <GridContainer>
                        <FlexLinks>
                            <ExternalLink href="tel:04922194224397">
                                +49 221 94224397
                            </ExternalLink>
                            <ExternalLink href="mailto:hey@lucascarl.com">
                                hey@lucascarl.com
                            </ExternalLink>
                        </FlexLinks>
                        <div />
                        <FlexLinks>
                            <Address>
                                Nonnenwerthstr. 8,<br />50937 Köln
                            </Address>
                        </FlexLinks>
                    </GridContainer>
                </Flex>
            </StyledContainer>
        </FooterContainer>
    );
};
