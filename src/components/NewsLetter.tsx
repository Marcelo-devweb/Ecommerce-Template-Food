import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
    return ( 
        <div className="bg-accentDark mt-16">
            <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                <div className="flex flex-shrink-0 items-center gap-4">
                    <LuMailOpen className="text-[60px]" />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">Cadastre-se em nossos boletins informativos</h3>
                        <p>...e receba cupom de R$ 20 na primeira compra</p>
                    </div>
                </div>
                <div className="w-full max-w-[500px] relative">
                    <input type="email" className="py-4 px-6 w-full rounded-full" placeholder="Seu email..."/>
                    <button className="bg-accentDark absolute top-[-20%] right-2 translate-y-[50%] py-2 px-4 rounded-full hover:bg-accent">Inscreva-se</button>
                </div>
            </div>
        </div>
     );
};
 
export default NewsLetter;