import React from "react";

export default React.memo(props => {
  React.useEffect(() => console.log("Rendered NavAnchor.js"));
  return <></>;
});
