import About from "./component/Hero/About";
import Banner from "./component/Hero/Banner";
import Promo from "./component/Hero/Promo";
import Services from "./component/Hero/Services";
import Map from "./component/Map/Map";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Village Square Pharmacy",
    openGraph: {
      images: [
        "/Photo (14).jpg",
      ],
    },
  };
}

export default function Home() {
  return (
    <main >
     
      <Banner/>
        <Promo />
        <About />
        <Services />
        <Map/>
     
    </main>
  )
}
