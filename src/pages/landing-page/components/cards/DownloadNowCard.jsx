import DownloadButton from "../DownloadButton";

export default function DownloadNowCard() {
  return (
    <div className="bg-white p-8 shadow-xl rounded-xl space-y-5 ">
      <div className="flex flex-row place-content-center">
        <img className="w-52" src="./picture/Ascent/Home.png" alt="" />
      </div>
      <h1>
        Download Ascent sekarang dan rasakan pengalaman belajar online yang
        lebih efektif dan menyenangkan!
      </h1>
      <DownloadButton />
    </div>
  );
}
