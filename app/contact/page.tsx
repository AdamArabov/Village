import ContactForm from "../component/ContactInfo/ContactForm";
import Operations from "../component/ContactInfo/Operation";
import Map from "../component/Map/Map";

export default function Contact(){
    return(
<div className="pt-4">
  <div className="flex">
    <div className="w-screen md:w-1/2 lg:w-1/2">
      <Map />
    </div>
    <div className="w-screen md:w-1/2 lg:w-1/2 pt-10">
      <ContactForm />
    </div>
  </div>
  <div className="pt-10 pb-4">
    <Operations />
  </div>
</div>
    )
}