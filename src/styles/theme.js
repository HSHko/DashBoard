import { default as color } from "./colorPhalette";

/* eslint-disable */

const BOX_BORDER = "border: 1px solid #e6e6e6;";
const BOX_RADIUS = "4px";

const box = {
  boxBorder: "border: 1px solid #e6e6e6;",
  boxRadius: "4px",
  box: `
    ${BOX_BORDER},
    ${BOX_RADIUS},
    background-color : white
    text-align: center;
  `,
};

const deviceSize = {
  Mobile: "480px",
  Tablet: "768px",
  Laptop: "992px",
  Max: "1200px",
};

export default {
  color,
  breakpoints: {
    /* ex.
      const Container = styled.div`
        width: 90vw;
        @media ${props => props.theme.breakpoints.Max} {
          width: ${props => props.theme.deviceSize.Max};
        }
      `;
    */
    Mobile: `(min-width: ${deviceSize.Mobile})`,
    Tablet: `(min-width: ${deviceSize.Table})`,
    Latptop: `(min-width: ${deviceSize.Latptop})`,
    Max: `(min-width: ${deviceSize.Max})`,
  },
  deviceSize,
  headerVals: {
    height: "7rem",
    zIndex: 7,
  },
};
