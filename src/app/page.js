import Image from "next/image";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Service/Services";
import Team from "./Components/Team";
import Vision from "./Components/Vision";

export default function Home() {
  return (
    <div>
      <div>
          <Banner></Banner>
        </div>
      <div className="mt-72 mb-10 bg-[#030712]">
          <About></About>
        </div>
      <div className="my-20">
          <Services></Services>
        </div>
      <div className="my-48">
          <Team></Team>
        </div>
      <div className="mt-80 mb-20">
          <Vision></Vision>
        </div>
    </div>
  );
}
