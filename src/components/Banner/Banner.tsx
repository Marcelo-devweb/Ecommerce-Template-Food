const Banner = () => {
    return ( 
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img src="/banner.webp" alt="Banner" className="hover:scale-105 transition-transform h-[265px]" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src="/banner-cafe.webp" alt="Banner" className="hover:scale-105 transition-transform h-[265px]" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;