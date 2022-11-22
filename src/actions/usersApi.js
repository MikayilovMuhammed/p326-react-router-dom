export const getAllUsers = (setUsers, setIsLoading) => {
  fetch("https://624b18f944505084bc4c1fed.mockapi.io/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export const getUserById = (setUser, setIsLoading, id) => {
  fetch(`//${id}`)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    })
    .catch(() => {
      console.log("error");
    })
    .finally(() => {
      setIsLoading(false);
    });
};
