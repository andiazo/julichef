import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#fffe96] to-[#d3ff84] text-black">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 px-4 md:px-6 space-y-10 xl:space-y-16">
                <div className="max-w-[1300px] mx-auto grid gap-4 px-4 sm:px-6 md:px-10 grid-cols-1 md:grid-cols-2 lg:gap-16">
                    <div className='my-8 space-y-6'>
                        <h1 className="text-5xl sm:text-8xl md:text-8xl lg:text-8xl font-extrabold tracking-tighter">
                            Tu Chef en whatsapp
                        </h1>
                        <p className="text-black md:text-3xl sm:text-xl max-w-xl mx-auto">
                        Obtén recomendaciones de deliciosas recetas cada semana. En tu whatsapp. Gratis 
                        </p>
                        <div className="flex space-x-4 justify-center">
                            <a
                                className="bg-white text-black rounded-md px-4 py-2 text-xl shadow hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-900"
                                href='https://chat.whatsapp.com/JcfE7t7rmgLIcOhjP0KirK'
                                target='_blank'
                            >
                                Unirme
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img
                            alt="Hero"
                            src="/hero-image.webp"
                            className="rounded-xl object-cover shadow-lg max-w-full h-auto mb-8"
                        />
                    </div>
                </div>
            </section>
        </div>
  )
}
