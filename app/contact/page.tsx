import ContactForm from "../component/ContactInfo/ContactForm";
import Operations from "../component/ContactInfo/Operation";
import Map from "../component/Map/Map";
export default function Contact() {
    return (
      <div className="pt-4">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/2 md:mb-0 lg:mb-0 mb-10">
            <Map />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 md:pt-0 lg:pt-0 pt-10">
            <ContactForm />
          </div>
        </div>
        <div className="pt-20 pb-4">
          <Operations />
        </div>
      </div>
    );
  }
  