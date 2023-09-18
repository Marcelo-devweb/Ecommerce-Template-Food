import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return(
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <img className="w-full h-[400px] object-cover rounded-lg" src="./banners/hero.jpg" alt="Imagem do Hero" />
          <div className="absolute max-w-[570px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-black">Frutas Secas de Melhor Qualidade</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">A partir de</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">R$17.50</div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">Compre Agora <BsArrowRight />{""}</div>
          </div>
      </div>
      </div>
  );
};

export default Hero;