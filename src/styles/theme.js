import { color } from "./colorPhalette";
import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core";

/* eslint-disable */

const vars = {
  header: {
    height: "7rem",
    zIndex: 7,
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

const theme = createMuiTheme({
  color,
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: color.red[6],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: color.blue[6],
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
  },
  vars,
  deviceSize,
  media,
});

export default theme;
// export default {};
