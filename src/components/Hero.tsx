
const Hero = () => {
  return (
    <div className="container pt-8">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
                <img className="w-full h-full object-cover rounded-lg" src="../back.webp" alt="imagem do hero" />
            </div>
            <div className="absolute max-w-[470px] sm:ml-16 ml:8 top-[50%] -translate-y-[50%] sm:space-y-4">
                <p className="text-2xl hidden sm:block">Frutas Secas 100% Originais</p>
                <h2 className="text-2xl sm:text-4xl ml:text-4xl md:text-6xl font-bold">Frutas Secas de Melhor Qualidade</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero;