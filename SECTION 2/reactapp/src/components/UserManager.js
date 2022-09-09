import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";

const UserManager = () => {
  const [usersList, setUsersList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userFormData, setUserFormData] = useState(null);

  const getDataFromBackend = async () => {
    // default request method : GET
    const response = await fetch("http://localhost:5000/user/getall");
    const data = await response.json();
    console.log(data);
    // store data in state
    setUsersList(data);
    console.log("request sent");
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteUser = async (id) => {
    // console.log(id);
    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    });
    console.log(response.status);
    getDataFromBackend();
    // import toast from 'react-hot-toast';
    toast.success("User Deleted 😁");
  };

  const editUser = (userdata) => {
    console.log(userdata);
    setUserFormData(userdata);
    setShowForm(true);
  };

  const showUsers = () => {
    return (
      <table className="table table-white table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Age</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <motion.tr
              key={user._id}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring" }}
            >
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    editUser(user);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <AnimatePresence className="container">
      <h1 className="text-center">User Manager</h1>
      <button onClick={getDataFromBackend}>Refresh</button>
      <div className="row">
        <div className="col-md">{showUsers()}</div>
        {showForm ? (
          <div className="col-md">
            <UpdateUser userFormData={userFormData} />
          </div>
        ) : (
          ""
        )}
      </div>
    </AnimatePresence>
  );
};

export default UserManager;
