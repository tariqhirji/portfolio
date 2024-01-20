import JV from "../../public/jv.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="jv">
      <Image
        src={JV}
        alt="JV Designs"
        width={0}
        height={0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
