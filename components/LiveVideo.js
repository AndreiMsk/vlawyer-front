import Image from "next/image";

export default function LiveVideo() {
  return (
    <div className="h-24 w-24 fixed bottom-4 right-4 rounded-full border-4 border-white flex justify-center items-center drop-shadow-xl bg-black">
        <p className="text-white text-sm">Video Call</p>
        <span className="inline-block bg-red-700 text-white text-sm px-3 border-radius-lg absolute -bottom-2"> Live</span>
    </div>
  );
}
