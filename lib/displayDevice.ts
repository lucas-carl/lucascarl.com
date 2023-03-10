const breakPoints = {
  mobileL: "576px",
  tabletM: "768px",
  desktopM: "992px",
  tabletL: "1024px",
  desktopL: "1200px",
};

export const devices = {
  mobileL: `(min-width: ${breakPoints.mobileL})`,
  tabletM: `(min-width: ${breakPoints.tabletM})`,
  desktopM: `(min-width: ${breakPoints.desktopM})`,
  tabletL: `(min-width: ${breakPoints.tabletL})`,
  desktopL: `(min-width: ${breakPoints.desktopL})`,
};
