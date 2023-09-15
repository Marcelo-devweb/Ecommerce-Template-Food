import ProductCard from "../Product Card/ProductCard";

const data = [
    { id: 0, img: "./breakfast/bolo.png", name: "Bolo Fofo", price: "R$14,99"},
    { id: 1, img: "./breakfast/iorgute.png", name: "Iorgute", price: "R$3,95 und."},
    { id: 2, img: "./breakfast/pao.png", name: "Pão Cacetinho", price: "R$0,35 und."},
    { id: 3, img: "./breakfast/queijo.png", name: "Queijo Mussarela", price: "R$54,90 kg"},
];

const FeatureSectionBreakfast = () => {
    return ( 
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Café da manhã e laticínios</h3>
                    <p className="text-gray-600 mt-2">Compre café da manhã da melhor qualidade on-line em uma parada grande perto de você</p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className="feature_btn">Ovos e laticínios</button>
                    <button className="text-gray-600 hover:text-accent">Pizza</button>
                    <button className="text-gray-600 hover:text-accent">Lanches</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src="/cafe.jpg" alt="Banner" />
                </div>
                {data.map(el =><ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />)}
            </div>
        </div>
     );
}
 
export default FeatureSectionBreakfast;