'use client'
export default function Promo(){
    return(
        <a href="tel:+15162012820">
        <div
          className="bg-cover bg-center min-h-[120px] md:min-h-[300px]"
          style={{
            backgroundImage: 'url(/Promo.png)',
            margin: '0px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
      </a>
    )
}