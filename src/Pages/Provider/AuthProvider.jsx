import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./../../firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodding, setLoading] = useState(true);

  const authInfo = {
    user,
    lodding,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
