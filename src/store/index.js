import { combineReducers } from "redux";
import sideAnchor, * as sideAnchors from "./sideAnchor";
import dialog, * as dialogs from "./dialog";

const infoReporter = (state, action) => {
  if (action.type.charAt(0) !== "@") console.log(`store: ${action.type}`);
  return null;
};

export { sideAnchors, dialogs };

export default combineReducers({
  infoReporter,
  sideAnchor,
  dialog,
});
