import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 1,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 2,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 3,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 4,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 5,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 6,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 7,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 8,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 9,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 10,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
    },
    {
        id: 11,
        name: "Teste",
        count: "10 Produtos",
        img: "/back.webp",
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