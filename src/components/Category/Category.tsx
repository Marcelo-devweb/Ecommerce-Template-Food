import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Abacate",
        count: "10 Produtos",
        img: "/Abacate.png",
    },
    {
        id: 1,
        name: "Abacaxi",
        count: "10 Produtos",
        img: "/abacaxi.jpg",
    },
    {
        id: 2,
        name: "Acerola",
        count: "10 Produtos",
        img: "/acerola.webp",
    },
    {
        id: 3,
        name: "Banana",
        count: "10 Produtos",
        img: "/banana.jpg",
    },
    {
        id: 4,
        name: "Acelga",
        count: "10 Produtos",
        img: "/acelga.jpg",
    },
    {
        id: 5,
        name: "Brocolis",
        count: "10 Produtos",
        img: "/brocolis.jpg",
    },
    {
        id: 6,
        name: "Alface",
        count: "10 Produtos",
        img: "/alface.jpg",
    },
    {
        id: 7,
        name: "Palmito",
        count: "10 Produtos",
        img: "/palmito.jpg",
    },
    {
        id: 8,
        name: "Aveia",
        count: "10 Produtos",
        img: "/aveia.png",
    },
    {
        id: 9,
        name: "Pão",
        count: "10 Produtos",
        img: "/pao.jpg",
    },
    {
        id: 10,
        name: "Leite",
        count: "10 Produtos",
        img: "/leite.jpg",
    },
    {
        id: 11,
        name: "Queijo",
        count: "10 Produtos",
        img: "/queijo.jpg",
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