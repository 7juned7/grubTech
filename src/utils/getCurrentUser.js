// utils/getCurrentUser.js

export const getCurrentUser =
  () => {
    if (
      typeof window ===
      "undefined"
    )
      return null;

    const stored =
      localStorage.getItem(
        "auth-user"
      );

    return stored
      ? JSON.parse(stored)
      : null;
  };