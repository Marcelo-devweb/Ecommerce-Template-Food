const Banner = () => {
    return ( 
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img src="./banners/banner-3.webp" alt="Banner" className="hover:scale-105 transition-transform h-[265px]" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src="./banners/banner-4.webp" alt="Banner" className="hover:scale-105 transition-transform h-[265px]" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;