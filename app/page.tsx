import About from "./component/Hero/About";
import Banner from "./component/Hero/Banner";
import Services from "./component/Hero/Services";
import Map from "./component/Map/Map";

export default function Home() {
  return (
    <main >
     
      <Banner/>
        <About />
        <Services />
        <Map/>
     
    </main>
  )
}
