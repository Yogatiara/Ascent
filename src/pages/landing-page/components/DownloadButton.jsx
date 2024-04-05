const DownloadButton = ({ scale }) => {
  return (
    <button
      className={`rounded-lg bg-[#0092A4] p-2 text-${scale} text-white `}
    >
      Unduh sekarang
    </button>
  );
};

export default DownloadButton;
