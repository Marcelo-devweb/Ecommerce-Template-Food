interface propsType{
    img: string;
    title: string;
    date: string;
}

const NewsCard:React.FC <propsType> = ({ img, title, date }) => {
    return ( 
        <div className="space-y-4">
            <img src={img} alt="News" className="rounded-lg hover:scale-105 transition-transform h-[200px] w-[350px]" />
            <div className="text-accent font-medium">
                <span>{date}</span>
                <div className="border border-gray-200 w-[85px]"></div>
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
        </div>
     );
};
 
export default NewsCard;