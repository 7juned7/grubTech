export const loginUser = async ({ email, password }) => {
  await new Promise((res) => setTimeout(res, 1000));

  // Teacher 1
  if (email === "teacher@test.com" && password === "123") {
    return {
      token: "teacher-token",
      role: "teacher",
      teacherId: "demo",
    };
  }

  // Teacher 2
  if (email === "science@test.com" && password === "123") {
    return {
      token: "science-token",
      role: "teacher",
      teacherId: "science",
    };
  }

  // Principal
  if (email === "principal@test.com" && password === "123") {
    return {
      token: "principal-token",
      role: "principal",
    };
  }

  throw new Error("Invalid credentials");
};