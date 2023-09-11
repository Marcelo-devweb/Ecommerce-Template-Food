interface propsType{
    img: string;
    title: string;
    date: string;
}

const NewsCard:React.FC <propsType> = ({ img, title, date }) => {
    return ( 
        <div className="space-y-4">
            <img src={img} alt="post" className="rounded-lg hover:scale-105 transition-transform" />
            <div className="text-accent font-medium">
                <span>{date} / </span>
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
        </div>
     );
};
 
export default NewsCard;