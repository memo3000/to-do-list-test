import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="flex mt-[38px] mb-[950px] ml-[64px] mr-[1228px]">
          <Image
            src="/logo.png"
            width={148}
            height={36}
          />
        </div>
        <div className="flex mt-[45px] mb-[955px] ml-[1146px] mr-[259px]">
          blog
        </div>
        <div className="flex mt-[39px] mb-[948px] ml-[1226px] mr-[64px]">
          <Image
            src="/connect.png"
            width={150}
            height={37}
          />
        </div>
      </div>
      <div>
        {/* 왼쪽 내용 추가 */}
        <div>
          <h1> Lorem Ipsum </h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>

        </div>
      </div>
      <div>
        {/* 오른쪽 내용 추가 */}
      </div>
    </div>
  );
}