"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext =
  createContext();

const AUTH_KEY = "auth-user";

export const AuthProvider = ({
  children,
}) => {
 const [user, setUser] =
  useState(undefined);

  /* =========================
     LOAD USER
  ========================= */

  useEffect(() => {
    const stored =
      localStorage.getItem(
        AUTH_KEY
      );

    if (stored) {
      setUser(
        JSON.parse(stored)
      );
    }
  }, []);

  /* =========================
     LOGIN
  ========================= */

  const login = (data) => {
    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify(data)
    );

    setUser(data);
  };

  /* =========================
     LOGOUT
  ========================= */

  const logout = () => {
    localStorage.removeItem(
      AUTH_KEY
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};