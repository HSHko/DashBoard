import { combineReducers } from "redux";
import mobileDrawer, * as mobileDrawers from "./mobileDrawer";

export { mobileDrawers };

export default combineReducers({
  mobileDrawer,
});
