import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../routes/consts";

function Home() {
  const { push } = useHistory();

  const handleGoToServicePage = () => {
    push(ROUTER.SERVICES);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Link to={ROUTER.USER.PATH}>Users</Link>
      <br />
      <br />
      <br />
      <br />
      <br />

      <button onClick={handleGoToServicePage}>Go to Services</button>
    </>
  );
}

export default Home;
