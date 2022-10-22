import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { StepLi, StepTitle, StepText, StepDate, TimelineHeadline, TimelineWrapper, TimelinePoint } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children, date, dir }: ChildrenStringProps) => (
    <StepLi dir={dir}>
      <StepDate dir={dir}>{date}</StepDate>
      <TimelinePoint dir={dir} />
      <StepTitle dir={dir}>{title}</StepTitle>
      <StepText dir={dir}>{children}</StepText>
    </StepLi>
  );

  // const ReducedTimeline = () => (
  //   <>
  //     <Year>Studium Integrated Design</Year>
  //     <ul>
  //       <Step title="International School of Design, Köln">
  //         seit 2020
  //       </Step>
  //     </ul>
  //     <Divider />
  //     <Year>01.08.2017 - 26.06.2020</Year>
  //     <ul>
  //       <Step title="Ausbildung zur Medien- gestalterin für Digital und Printmedien">
  //         Public Markenagentur, Köln
  //       </Step>
  //     </ul>
  //     <Divider />
  //     <Year>20.01. - 31.01.2014</Year>
  //     <ul>
  //       <Step title="Zweiwöchiges Praktikum">
  //         Typodesign, Köln
  //       </Step>
  //     </ul>
  //   </>
  // );
  //
  // const FullTimeline = () => (
  //   <>
  //     <Divider />
  //     <Year>2018</Year>
  //     <ul>
  //       <Step title="Joined Circle">
  //         I was offered and accepted a full-time offer with Circle - a Software
  //         Development company in Georgia.
  //       </Step>
  //       <Step title="Started Learning Frontend Development">
  //         Got hooked on learning Frontend, but I wasn't sure where or how to
  //         start. <br />
  //         There were so many options available not only programming
  //         language-wise, but regarding tools, frameworks, and technologies as
  //         well.
  //       </Step>
  //     </ul>
  //     <Divider />
  //     <Year>2014</Year>
  //     <ul>
  //       <Step title="Started at University">
  //         I started studying Business Administration at The Agricultural
  //         University of Georgia.
  //       </Step>
  //     </ul>
  //   </>
  // );

  return (
    <>
      <TimelineHeadline>Lebenslauf</TimelineHeadline>

      <TimelineWrapper>
        <ul>
          <Step
            dir="left"
            date="seit 2022"
            title="Studentische Aushilfe"
          >
            Endemol Shine Germany GmbH, Köln
          </Step>
          <Step
            dir="right"
            date="seit 2020"
            title="Studium Integrated Design"
          >
            International School of Design, Köln
          </Step>
          <Step
            dir="left"
            date="2017 - 2020"
            title="Ausbildung zur Medien- gestalterin für Digital und Printmedien"
          >
            Public Markenagentur GmbH, Köln
          </Step>
          <Step
            dir="right"
            date="2014"
            title="zweiwöchiges Praktikum"
          >
            Typodesign GmbH, Köln
          </Step>
          <Step
            dir="left"
            date="2012"
            title="dreiwöchiges Praktikum"
          >
            C&G: Strategische Kommunikation GmbH, Untereschbach
          </Step>
        </ul>
      </TimelineWrapper>
    </>
  );
};
