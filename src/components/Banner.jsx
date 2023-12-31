import { car, carblack, carro } from "../assets"

const Banner = () => (
    <section className={`flex my-6 text-white`}>
        <div>
            <p className={`text-[16px] pl-4 font-fredoka text-slate-500`}>Mercedes-Benz</p>
            <h1 className={`text-[52px] pl-4 font-varela text-white`}>The Future Are Here!</h1>
            <div className="w-full h-96 sm:flex justify-center">
                <div className="xs:w-full xs-">
                    <img
                    src={car}
                    alt="car"
                    className="xs:w-full sm:border-r-2"
                    />

                </div>  
                <div className="xs:w-full xs:h-full">
                    <img
                    src={carblack}
                    alt="carblack"
                    className="xs:w-full brightness-50"
                    />
                </div>

                <div className="xs:w-full xs:mt-40 xs:h-1/2">
                    <img
                    src={carro}
                    alt="carro"
                    className="xs:w-full brightness-100"
                    />
                </div>
                
            </div>
            
        </div>
    </section>
)


export default Banner