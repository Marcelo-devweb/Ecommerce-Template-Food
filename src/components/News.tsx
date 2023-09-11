import NewsCard from "./NewsCard";

const data = [
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
    { img: "/back.webp", title: "Teste", date: "Aug 27, 2023",},
];

const News = () => {
    return ( 
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Últimas noticias</h2>
            <p className="text-gray-500">Apresente as postagens da melhor forma para destacar momentos interessantes do seu blog.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => <NewsCard key={el.date} img={el.img} title={el.title} date={el.date} />)}
            </div>
        </div>
     );
}
 
export default News;