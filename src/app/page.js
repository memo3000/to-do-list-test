import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-row">
        <div className="flex mt-15px ml-60px">
          Lineups & scores
        </div>
        <div className="flex mt-30px ml-880px">
          Lineups
        </div>
        <div>
          Scores
        </div>
        <div>
          Lineups & scores
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          leagues
        </div>
        <div className="w-1/2">
          search
        </div>
      </div>
    </div>
  );
}