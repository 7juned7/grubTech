// services/live.service.js

import { mockContents } from "@/data/mockContents";

export const getLiveContent =
  async (teacherId) => {

    await new Promise((res) =>
      setTimeout(res, 300)
    );

    // INITIALIZE LOCAL STORAGE
    let stored = JSON.parse(
      localStorage.getItem(
        "content-data"
      )
    );

    if (!stored) {
      localStorage.setItem(
        "content-data",
        JSON.stringify(mockContents)
      );

      stored = mockContents;
    }

    const now = new Date();

    const teacherContent =
      stored.filter(
        (item) =>
          item.teacherId ===
            teacherId &&
          item.status ===
            "approved"
      );

    const live =
      teacherContent.filter(
        (item) => {
          const start =
            new Date(
              item.startTime
            );

          const end =
            new Date(
              item.endTime
            );

          return (
            now >= start &&
            now <= end
          );
        }
      );

    const upcoming =
      teacherContent.filter(
        (item) => {
          const start =
            new Date(
              item.startTime
            );

          return start > now;
        }
      );

    const completed =
      teacherContent.filter(
        (item) => {
          const end =
            new Date(
              item.endTime
            );

          return end < now;
        }
      );

    return {
      live,
      upcoming,
      completed,
    };
};