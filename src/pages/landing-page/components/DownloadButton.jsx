// eslint-disable-next-line react/prop-types
const DownloadButton = ({ scale }) => {
  return (
    <button
      type="button"
      onClick={() =>
        (window.location.href =
          "https://drive.usercontent.google.com/u/1/uc?id=1nZtwwQLOXW3YNZjhRmEQr9d-KwnfKI8W&export=download")
      }
      className={`rounded-lg bg-[#0092A4] p-2 text-${scale} text-white `}
    >
      Unduh sekarang
    </button>
  );
};

export default DownloadButton;
