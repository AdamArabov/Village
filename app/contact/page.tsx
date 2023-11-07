import ContactForm from "../component/ContactInfo/ContactForm";
import Map from "../component/Map/Map";

export default function Contact(){
    return(
<div className="flex pt-4">
  <div className="w-screen h-screen md:w-1/2 lg:w-1/2">
    <Map />
  </div>
  <div className="w-screen md:w-1/2 lg:w-1/2 pt-10">
    <ContactForm />
  </div>
</div>
    )
}