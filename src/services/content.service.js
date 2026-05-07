// services/content.service.js

import { fileToBase64 } from "@/utils/helpers";
import { getCurrentUser } from "@/utils/getCurrentUser";

import {
  getStorageData,
  setStorageData,
  STORAGE_KEYS,
} from "@/utils/storage";

/* =========================
   GET TEACHER CONTENT
========================= */

export const getTeacherContent =
  async (page = 1, limit = 5) => {

    await new Promise((res) =>
      setTimeout(res, 300)
    );

    const user =
      getCurrentUser();

    const stored =
      getStorageData(
        STORAGE_KEYS.CONTENT
      );

    const filtered =
      stored.filter(
        (item) =>
          item.teacherId ===
          user?.teacherId
      );

    const start =
      (page - 1) * limit;

    const end = page * limit;

    return {
      data: filtered.slice(
        start,
        end
      ),

      allData: filtered,

      total: filtered.length,

      totalPages: Math.ceil(
        filtered.length / limit
      ),
    };
  };

/* =========================
   UPLOAD CONTENT
========================= */

export const uploadContent =
  async (data) => {
    await new Promise((res) =>
      setTimeout(res, 500)
    );

    const user =
      getCurrentUser();

    const existing =
      getStorageData(
        STORAGE_KEYS.CONTENT
      );

    const file =
      data.file?.[0];

    if (!file) {
      throw new Error(
        "No file selected"
      );
    }

    const previewUrl =
      URL.createObjectURL(
        file
      );

    const newItem = {
      id: Date.now(),

      teacherId:
        user?.teacherId,

      title: data.title,

      subject:
        data.subject,

      description:
        data.description,

      status: "pending",

      startTime:
        data.startTime,

      endTime:
        data.endTime,

      rotation:
        data.rotation,

      fileName: file.name,

      fileType: file.type,

      preview: previewUrl,
    };

    const updated = [
      newItem,
      ...existing,
    ];

    setStorageData(
      STORAGE_KEYS.CONTENT,
      updated
    );

    return newItem;
  };