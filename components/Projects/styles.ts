import styled from "styled-components";
import { COLOR_MEDIUM_GRAY } from "lib/colorPalette";
import Image from "next/image";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Project = styled.div`
  display: flex;
`;

export const ProjectImage = styled(Image)`

`;
