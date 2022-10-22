import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import Image from "next/image";

import TestImage from './images/test.png';

import { Project, ProjectGrid } from "components/Projects/styles";

const Divider = () => <DividerBorder />;

const Headline = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Projects = () => {
  return (
    <>
      <h3>Projekte</h3>

      <ProjectGrid>
        <Project>
          <Image
            src={TestImage}
            alt=""
            width="625px"
            height="500px"
            placeholder="blur"
          />
        </Project>
      </ProjectGrid>
    </>
  );
};
