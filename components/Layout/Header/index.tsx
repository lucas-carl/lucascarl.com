import { Navigation } from "components/Layout/Navigation";
import { COLOR_BLACK, COLOR_WHITE } from "lib/colorPalette";

import { Wrapper, StickyNav } from "components/Layout/Header/styles";

interface HeaderProps {
  darkTheme: boolean;
  changeTheme: () => void;
}

export const Header = ({ darkTheme, changeTheme }: HeaderProps) => {
  return (
    <StickyNav darkTheme={darkTheme}>
      <Wrapper>
        <div>
          <Navigation href="/" text="Projekte" />
          <Navigation href="/lebenslauf" text="Lebenslauf" />
        </div>
      </Wrapper>
    </StickyNav>
  );
};
