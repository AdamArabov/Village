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
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Alt Text"
                className="w-full h-72 object-cover object-center"
                width={100}
                height={100}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap text-center">
                  <Link href="/services#service-0" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">DMV Vision Test</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Alt Text"
                className="w-full h-72 object-cover object-center"
                width={100}
                height={100}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap text-center">
                  <Link href="/services#service-1" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Vaccines</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Alt Text"
                className="w-full h-72 object-cover object-center"
                width={100}
                height={100}
              />
              <div className="p-6 text-center">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div className="flex items-center flex-wrap text-center">
                  <Link href="/services#service-2" className="text-vill inline-flex items-center md:mb-2 lg:mb-0">Prescription</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}