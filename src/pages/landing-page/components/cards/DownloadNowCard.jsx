import DownloadButton from "../DownloadButton";

export default function DownloadNowCard() {
  return (
    <div className="flex-row-reverse items-center gap-4 space-y-5 rounded-xl bg-white p-8 shadow-lg min-[700px]:flex min-[700px]:p-6">
      <div className="flex flex-row place-content-center rounded-xl bg-[#0092A4] p-3">
        <img
          className="w-52 min-[700px]:w-max"
          src="./picture/Ascent/Home.png"
          alt=""
        />
      </div>

      <div className="space-y-6">
        <h1>
          Download Ascent sekarang dan rasakan pengalaman belajar online yang
          lebih efektif dan menyenangkan!
        </h1>
        <DownloadButton scale={"base"} />
      </div>
    </div>
  );
}
