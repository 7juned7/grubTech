export const getStats = (data) => {
  return {
    total: data.length,
    pending: data.filter((i) => i.status === "pending").length,
    approved: data.filter((i) => i.status === "approved").length,
    rejected: data.filter((i) => i.status === "rejected").length,
  };
};
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};