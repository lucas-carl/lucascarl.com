import { COLOR_MEDIUM_GRAY, COLOR_SPOTIFY_GREEN } from "lib/colorPalette";
import { devices } from "lib/displayDevice";
import styled from "styled-components";

export const TimelineHeadline = styled.h3`
  text-align: center;
  padding-top: 1rem;
`;

export const StepLi = styled.li`
  display: grid;
  grid-template-areas:
    "title bar date"
    "text bar date";
  grid-template-columns: 1fr 1rem 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 1.25rem;
  grid-row-gap: 0.5rem;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  ${props => props.dir === 'right' ? (
    `grid-template-areas:
      "date bar title"
      "date bar text";`
  ) : ''}

  br {
    content: "";
    margin: 1rem;
    display: block;
  }

  @media ${devices.tabletM} {
    margin-left: 0;
  }
`;

export const StepTitle = styled.h5`
  margin: 0;
  font-size: 1.125rem;
  grid-area: title;

  ${props => props.dir === 'left' ? 'text-align: right;' : ''}
`;

export const StepDate = styled.p`
  margin: 0;
  grid-area: date;
  line-height: 35px;
  color: ${COLOR_SPOTIFY_GREEN};

  ${props => props.dir === 'right' ? 'text-align: right;' : ''}
`;

export const StepText = styled.p`
  margin: 0;
  grid-area: text;

  ${props => props.dir === 'left' ? 'text-align: right;' : ''}

  @media ${devices.tabletM} {
    margin: 0;
  }
`;

export const TimelinePoint = styled.div`
  background-color: ${COLOR_SPOTIFY_GREEN};
  grid-area: bar;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  z-index: 10;
  flex-shrink: 0;
  margin: 0.625rem 0 0 0;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-top: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: ${COLOR_MEDIUM_GRAY};
  }
`;

export const MoreButton = styled.button`
  line-height: 1.25rem;
  border-radius: 0.75rem;
  align-items: center;
  display: flex;
  margin: 2rem auto;
  padding: 0.75rem 1rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }
`;
