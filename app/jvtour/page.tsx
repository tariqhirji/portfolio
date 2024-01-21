import JVTour from "../../public/jvtour.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="jv">
      <Image
        src={JVTour}
        alt="JV Designs - Tour"
        width={0}
        height={0}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
