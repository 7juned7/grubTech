// services/approval.service.js

import { getCurrentUser } from "@/utils/getCurrentUser";

import {
  getStorageData,
  setStorageData,
  STORAGE_KEYS,
} from "@/utils/storage";

/* =========================
   HELPERS
========================= */

const validatePrincipal =
  () => {
    const user =
      getCurrentUser();

    if (
      user?.role !==
      "principal"
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    return user;
  };

const updateContentStatus =
  (
    stored,
    id,
    updates
  ) => {
    return stored.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              ...updates,
            }
          : item
    );
  };

/* =========================
   GET ALL CONTENT
========================= */

export const getAllContent =
  async () => {
    await new Promise(
      (res) =>
        setTimeout(
          res,
          300
        )
    );

    validatePrincipal();

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      ) || [];

    return {
      allData: stored,
    };
  };

/* =========================
   APPROVE CONTENT
========================= */

export const approveContent =
  async (id) => {
    await new Promise(
      (res) =>
        setTimeout(
          res,
          300
        )
    );

    validatePrincipal();

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      ) || [];

    const updated =
      updateContentStatus(
        stored,
        id,
        {
          status:
            "approved",

          rejectionReason:
            "",

          approvedAt:
            new Date().toISOString(),
        }
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
  async (
    id,
    reason
  ) => {
    await new Promise(
      (res) =>
        setTimeout(
          res,
          500
        )
    );

    validatePrincipal();

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      ) || [];

    const updated =
      updateContentStatus(
        stored,
        id,
        {
          status:
            "rejected",

          rejectionReason:
            reason,

          rejectedAt:
            new Date().toISOString(),
        }
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