import { color } from "./colorPhalette";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core";

/* eslint-disable */

export const gCss = {
  h1: "6rem",
  h2: "4rem",
  h3: "3rem",
  h4: "2rem",
  h5: "1.5rem",
  h6: "1.25rem",
};

const vars = {
  overlay: {
    zIndex: 1200,
  },
  sidebar: {
    zIndex: 7,
  },
  navbar: {
    height: "3.5rem",
    zIndex: 5,
  },
  footer: {
    bgColor: color.black,
  },
};

const deviceSize = {
  mobile: {
    min: "1px",
    max: "768px",
  },
  tablet: {
    min: "769px",
    max: "1024px",
  },
  laptop: {
    min: "1025px",
    max: "1440px",
  },
};

const media = {
  mobile: {
    min: `@media(min-width: ${deviceSize.mobile.min})`,
    max: `@media(max-width: ${deviceSize.mobile.max})`,
  },
  tablet: {
    min: `@media(min-width: ${deviceSize.tablet.min})`,
    max: `@media(max-width: ${deviceSize.tablet.max})`,
  },
  laptop: {
    min: `@media(min-width: ${deviceSize.laptop.min})`,
    max: `@media(max-width: ${deviceSize.laptop.max})`,
  },
};

export const Hide = styled.div`
  ${props => {
    if (props.mmin) {
      return `${media.mobile.min} {display: none;}`;
    } else if (props.mmax) {
      return `${media.mobile.max} {display: none;}`;
    } else if (props.tmin) {
      return `${media.tablet.min} {display: none;}`;
    } else if (props.tmax) {
      return `${media.tablet.max} {display: none;}`;
    } else if (props.lmin) {
      return `${media.laptop.min} {display: none;}`;
    } else if (props.lmax) {
      return `${media.laptop.max} {display: none;}`;
    }
  }}
`;

export const BackDrop = styled.div`
  z-index: ${vars.overlay.zIndex};
  position: fixed;
  width: 100vh;
  height: 100vh;
  transition: all 500ms;
  background-color: ${p => p.theme.color.gray[5]};
`;

const theme = createMuiTheme({
  color,
  palette: {
    primary: {
      main: color.brown[3],
      lv: color.brown,
    },
    secondary: {
      main: color.red[0],
      lv: color.red,
    },
    default: {
      main: color.indigo[3],
      lv: color.brown,
    },
    test: color.lime,
  },
  vars,
  deviceSize,
  media,
});

export default theme;
// export default {};
