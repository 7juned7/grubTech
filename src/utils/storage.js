// utils/storage.js

import { mockContents } from "@/data/mockContents";

export const STORAGE_KEYS = {
  CONTENT: "content-data",
};

/* =========================
   INIT STORAGE
========================= */

export const initializeStorage =
  () => {
    if (
      typeof window ===
      "undefined"
    )
      return;

    const existing =
      localStorage.getItem(
        STORAGE_KEYS.CONTENT
      );

    if (!existing) {
      localStorage.setItem(
        STORAGE_KEYS.CONTENT,
        JSON.stringify(
          mockContents
        )
      );
    }
  };

/* =========================
   GET STORAGE
========================= */

export const getStorageData = (
  key
) => {
  initializeStorage();

  return (
    JSON.parse(
      localStorage.getItem(key)
    ) || []
  );
};

/* =========================
   SET STORAGE
========================= */

export const setStorageData = (
  key,
  data
) => {
  localStorage.setItem(
    key,
    JSON.stringify(data)
  );
};

/* =========================
   CLEAR STORAGE
========================= */

export const clearStorageData =
  (key) => {
    localStorage.removeItem(
      key
    );
  };