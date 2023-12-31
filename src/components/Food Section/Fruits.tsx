import ProductCard from "../Product Card/ProductCard";

const data = [
    { id: 0, img: "./fruits/goiaba.png", name: "Goiaba", price: "R$8,78 kg"},
    { id: 1, img: "./fruits/laranja.png", name: "Laranja", price: "R$2,25 kg"},
    { id: 2, img: "./fruits/maracuja.png", name: "Maracujá", price: "R$15,99 kg"},
    { id: 3, img: "./fruits/melancia.png", name: "Melancia", price: "R$2,29 kg"},
];

const FeatureSectionFruits = () => {
    return ( 
        <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-2xl">Frutas & Vegetais</h3>
                    <p className="text-gray-600 mt-2">Compre frutas e vegetais frescos da fazenda online com os melhores preços</p>
                </div>
                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className="feature_btn">Frutas</button>
                    <button className="text-gray-600 hover:text-accent">Vegetais</button>
                    <button className="text-gray-600 hover:text-accent">Pão e Padaria</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img className="w-full h-full object-cover" src="./banners/banner-1.jpg" alt="Banner" />
                </div>
                {data.map(el =><ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />)}
            </div>
        </div>
     );
}
 
export default FeatureSectionFruits;