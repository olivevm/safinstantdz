"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthPopupOpen: boolean;
  openAuthPopup: () => void;
  closeAuthPopup: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const openAuthPopup = () => setIsAuthPopupOpen(true);
  const closeAuthPopup = () => setIsAuthPopupOpen(false);

  return (
    <AuthContext.Provider
      value={{ isAuthPopupOpen, openAuthPopup, closeAuthPopup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
