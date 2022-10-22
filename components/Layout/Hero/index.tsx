import ProfilePicture from "public/assets/images/Alicia.jpeg";

import {HeroFlex, ContentWrapper, RoundImage, HeroDescription} from "components/Layout/Hero/styles";

export const Hero = () => {
  return (
    <HeroFlex align="flex-start">
      <ContentWrapper>
        <h1>Alicia Kippels</h1>
        <HeroDescription>Mediengestalterin aus Köln</HeroDescription>
      </ContentWrapper>
      <RoundImage
        src={ProfilePicture}
        alt="Portrait von Alicia"
        width="200px"
        height="200px"
      />
    </HeroFlex>
  );
};

export default Hero;
