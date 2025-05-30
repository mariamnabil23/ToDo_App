import axios from "axios";
import { createContext, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

// 1- create context
export const AuthContext = createContext();

// 2- create provider function that contain all data we will send (value)
export const AuthContextProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = sessionStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const urlAPI = "https://683a116143bb370a8671c066.mockapi.io/api/users";
  // fetch all users from API
  const fetchUsers = () => {
    axios
      .get(urlAPI)
      .then((res) => setAllUsers(res.data))
      .catch((err) => console.log("Error fetching users ❌", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // login
  const handleLogin = (userInfo) => {
    setCurrentUser(userInfo);
  };

  // register
  const handleRegister = (newUser) => {
    axios
      .post(urlAPI, newUser)
      .then((data) => console.log(data.data))
      .catch((error = confirm.log("Failed to add new users in the app ❌")));
  };

  // logout
  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("currentUser");
  };

  const sendCompletedTodos = (userEmail, username, completedTodos) => {
    const completedList = completedTodos
      .map((todo) => `• ${todo.title}`)
      .join("\n");

    const templateParams = {
      to_email: userEmail,
      username: username,
      completedTodos: completedList,
    };

    emailjs
      .send(
        "service_qwtjd51",
        "template_w157uec",
        templateParams,
        "08YRxWyjDgOt_r7sV"
      )
      .then((res) => {
        toast.success("Email sent successfully! 📧");
        console.log(templateParams);
      })
      .catch((err) => {
        toast.error("Failed to send email ❌");
        console.error(err);
      });
  };

  // 3- wrapper everything to the context provider
  return (
    <AuthContext.Provider
      value={{
        allUsers,
        currentUser,
        handleLogin,
        handleRegister,
        handleLogout,
        sendCompletedTodos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
