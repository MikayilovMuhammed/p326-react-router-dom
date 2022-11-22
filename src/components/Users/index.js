import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { getAllUsers, getUserById } from "../../actions/usersApi";
import { usersService } from "../../APIs/Services/Users";
import { useServices } from "../../hooks/useServices";
import { ROUTER } from "../../routes/consts";

function Users() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [user, setUser] = React.useState();

  const [id, setId] = React.useState();

  const { usersService } = useServices();

  const location = useLocation();
  const { goBack, push } = useHistory();

  // const handleClick = () => {
  //   setIsLoading(true);
  //   getAllUsers(setUsers, setIsLoading);
  // };

  const handleClick = React.useCallback(() => {
    // setIsLoading(true);
    // getAllUsers(setUsers, setIsLoading);
    // setClicked(true);
    console.log("test");
    setClicked(true);
    goBack();
  }, [goBack]);

  const handleFilteredData = React.useMemo(() => {
    let test = [];
    if (users) {
      test = users;
    }
    if (clicked) {
      test = test.filter((item) => Number(item.id) > 38);
    }
    return test;
  }, [users, clicked]);

  React.useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  // const handle = () => {
  //   let test = [];
  //   if (users) {
  //     test = users;
  //   }
  //   if (clicked) {
  //     test = test.filter((item) => Number(item.id) > 38);
  //   }
  //   return test;
  // };

  // const

  // React.useEffect(() => {
  //   // if (clicked) {
  //   setIsLoading(true);
  //   getAllUsers(setUsers, setIsLoading);
  //   // }
  // }, []);

  React.useEffect(() => {
    setIsLoading(true);
    usersService
      .getAllUsers()
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    // if (id) {
    //   getUserById(setUser, setIsLoading, id);
    // }
    if (id) {
      usersService.getUserById(id).then(({ data }) => {
        setUser(data);
        // console.log(data);
      });
    }

    // id &&
    //   usersService.getUserById(id).then(({ data }) => {
    //     // setUser(data.id);
    //     console.log(data);
    //   });
  }, [id]);

  // if (isLoading) {
  //   return <h1>Loanding...</h1>;
  // }

  return (
    <div>
      <button onClick={handleClick}>Get data</button>
      {id && (
        <h2>
          {user?.name} - {user?.id}
        </h2>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        handleFilteredData.map(({ name, id }) => (
          <h1
            key={id}
            onClick={() => {
              push(ROUTER.SERVICES, { name, id });
            }}
          >
            {id} - {name}
          </h1>
        ))
      )}
    </div>
  );
}

export default Users;
