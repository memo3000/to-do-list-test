import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex mt-15 ml-60 w-450 h-60 text-xl">
          Lineups & scores
        </div>
        <div className="flex mt-30 ml-880 w-120 h-40 text-base">
          Lineups
        </div>
        <div className="flex mt-30 ml-1030 w-100 h-40 text-base">
          Scores
        </div>
        <div className="flex mt-30 ml-1150 w-260 h-40 text-base">
          Lineups & scores
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex mt-100 ml-60 w-180 h-40 text-lg">
          leagues
        </div>
        <div className="flex">
          search
        </div>
      </div>
    </div>
  );
}