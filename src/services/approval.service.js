// services/approval.service.js

import { getCurrentUser } from "@/utils/getCurrentUser";

import {
  getStorageData,
  setStorageData,
  STORAGE_KEYS,
} from "@/utils/storage";

/* =========================
   GET ALL CONTENT
========================= */

export const getAllContent =
  async () => {

    await new Promise((res) =>
      setTimeout(res, 300)
    );

    const user =
      getCurrentUser();

    if (
      user?.role !== "principal"
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      );

    return {
      allData: stored,
    };
  };

/* =========================
   APPROVE CONTENT
========================= */

export const approveContent =
  async (id) => {

    await new Promise((res) =>
      setTimeout(res, 300)
    );

    const user =
      getCurrentUser();

    if (
      user?.role !== "principal"
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      );

    const updated =
      stored.map((item) =>
        item.id === id
          ? {
              ...item,

              status:
                "approved",

              rejectionReason:
                "",
            }
          : item
      );

    setStorageData(
      STORAGE_KEYS.CONTENT,
      updated
    );

    return {
      success: true,
      data: updated,
    };
  };

/* =========================
   REJECT CONTENT
========================= */

export const rejectContent =
  async (id, reason) => {

    await new Promise((res) =>
      setTimeout(res, 500)
    );

    const user =
      getCurrentUser();

    if (
      user?.role !== "principal"
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      );

    const updated =
      stored.map((item) =>
        item.id === id
          ? {
              ...item,

              status:
                "rejected",

              rejectionReason:
                reason,
            }
          : item
      );

    setStorageData(
      STORAGE_KEYS.CONTENT,
      updated
    );

    return {
      success: true,
      data: updated,
    };
  };