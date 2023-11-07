import ContactForm from "../component/ContactInfo/ContactForm";
import Map from "../component/Map/Map";

export default function Contact(){
    return(
<div>
        <div className="mt-5 w-screen h-screen md:w-1/2 md:h-screen lg:w-1/2 lg:h-screen">
        <Map/>
        </div>
        <div>
        <ContactForm/>
        </div>
</div>
    )
}