import NewsCard from "./NewsCard";

const dataNews = [
    { img: "/news/News-1.webp", title: "Cortar completamente carne e laticínios faz bem à saúde?", date: "23/02/2020"},
    { img: "/news/News-2.webp", title: "10 alimentos sem glúten para substituir o trigo", date: "18/08/2023"},
    { img: "/news/News-3.webp", title: "OMS atualiza tabela que define uma dieta saudável ", date: "15/08/2023"},
    { img: "/news/News-4.webp", title: "Doce de leite pode ser consumido no pré-treino? E no pós?", date: "03/08/2023"},
    { img: "/news/News-5.webp", title: "Adoçantes sem açúcar não devem ser usados no controle de peso, recomenda OMS", date: "15/05/2023"},
    { img: "/news/News-6.webp", title: "Banha de porco é saudável ou deve ser evitada?", date: "13/04/2023"},
];

const News = () => {
    return ( 
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Últimas noticias</h2>
            <p className="text-gray-500">Últimas noticias sobre alimentação!</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {dataNews.map((el) => <NewsCard key={el.date} img={el.img} title={el.title} date={el.date} />)}
            </div>
        </div>
     );
}
 
export default News;