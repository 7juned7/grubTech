export const compressImage = (
  file
) => {
  return new Promise(
    (resolve, reject) => {
      const reader =
        new FileReader();

      reader.readAsDataURL(
        file
      );

      reader.onload = (
        event
      ) => {
        const img =
          new Image();

        img.src =
          event.target.result;

        img.onload = () => {
          const canvas =
            document.createElement(
              "canvas"
            );

          const MAX_WIDTH = 800;

          const scale =
            MAX_WIDTH /
            img.width;

          canvas.width =
            MAX_WIDTH;

          canvas.height =
            img.height *
            scale;

          const ctx =
            canvas.getContext(
              "2d"
            );

          ctx.drawImage(
            img,
            0,
            0,
            canvas.width,
            canvas.height
          );

          const compressed =
            canvas.toDataURL(
              "image/webp",
              0.7
            );

          resolve(
            compressed
          );
        };

        img.onerror = reject;
      };

      reader.onerror = reject;
    }
  );
};