import Image from "next/image"
import Link from "next/link"

export default function Services(){
    return(
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
              <Image
                 src="https://images.unsplash.com/photo-1517948430535-1e2469d314fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={300}
                priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">DMV Vision Test</h1>
                <p className="leading-relaxed mb-3">We provide DMV vision tests. Results updated immediately.</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-0" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
            <Image
                 src="https://images.unsplash.com/photo-1612278248166-11be4a227f54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={300}
                 priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Immunizations</h1>
                <p className="leading-relaxed mb-3">We administer a wide variety of vaccines. Shingles, Flu, Covid-19 etc.</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-1" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
            <Image
                 src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={300}
                 priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Prescriptions</h1>
                <p className="leading-relaxed mb-3">We will make transfering from chain pharmacy's easy and effective.</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-2" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full  overflow-hidden">
            <Image
                 src="https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={300}
                 priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">We Deliver!</h1>
                <p className="leading-relaxed mb-3">Get free same-day local delivery on your prescriptions.</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-3" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden">
            <Image
                 src="https://images.unsplash.com/photo-1614605844432-731c32334c49?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={300}
                 priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Notary Public</h1>
                <p className="leading-relaxed mb-3">We are committed to making the notarization process as convenient and stress-free as possible</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-4" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden">
            <Image
                 src="https://images.unsplash.com/photo-1530469525856-cf37954301f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="Image Alt Text"
                 width={400}
                 height={400}
                 priority ={true}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Passport Photos</h1>
                <p className="leading-relaxed mb-3">Providing convenience and customer satisfaction in providing you with the passport photos you need.</p>
                <div className="flex items-center justify-center flex-wrap text-center">
                  <Link href="/services#service-5" className="text-vill inline-flex justify-center md:mb-2 lg:mb-0">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}