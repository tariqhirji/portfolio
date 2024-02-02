import FH from "../../public/FH-Feb2024.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="jv">
      <Image
        src={FH}
        alt="JV Designs"
        width={0}
        height={0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
