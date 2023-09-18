import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Abacate",
        count: "25 Produtos",
        img: "./fruits/Abacate.png",
    },
    {
        id: 1,
        name: "Abacaxi",
        count: "55 Produtos",
        img: "./fruits/abacaxi.png",
    },
    {
        id: 2,
        name: "Acerola",
        count: "74 Produtos",
        img: "./fruits/acerola.png",
    },
    {
        id: 3,
        name: "Banana",
        count: "82 Produtos",
        img: "./fruits/banana.png",
    },
    {
        id: 4,
        name: "Acelga",
        count: "95 Produtos",
        img: "./fruits/acelga.png",
    },
    {
        id: 5,
        name: "Brocolis",
        count: "84 Produtos",
        img: "./fruits/brocolis.png",
    },
    {
        id: 6,
        name: "Alface",
        count: "88 Produtos",
        img: "./fruits/alface.png",
    },
    {
        id: 7,
        name: "Palmito",
        count: "47 Produtos",
        img: "./fruits/palmito.png",
    },
    {
        id: 8,
        name: "Aveia",
        count: "12 Produtos",
        img: "./breakfast/aveia.png",
    },
    {
        id: 9,
        name: "Pão",
        count: "70 Produtos",
        img: "./breakfast/pao.png",
    },
    {
        id: 10,
        name: "Leite",
        count: "63 Produtos",
        img: "./breakfast/leite.png",
    },
    {
        id: 11,
        name: "Queijo",
        count: "50 Produtos",
        img: "./breakfast/queijo.png",
    },
]
const Category = () => {
    return (
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map(el => <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count} />)}
            </div>
        </div>
    );
}
 
export default Category;