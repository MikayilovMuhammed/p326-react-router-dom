import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function Services() {
  const { state: locationState } = useLocation();
  const { goBack } = useHistory();

  React.useEffect(() => {
    console.log(locationState);
  }, [locationState]);

  return (
    <>
      <button onClick={() => goBack()}>Go back</button>
      <h1>
        {locationState?.id} - {locationState?.name}
      </h1>
    </>
  );
}

export default Services;
