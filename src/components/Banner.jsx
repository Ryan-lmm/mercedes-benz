import { car, carblack, carro } from "../assets"

const Banner = () => (
    <section className={`flex my-6 text-white`}>
        <div>
            <p className={`text-[16px] pl-4 font-fredoka text-slate-500`}>Mercedes-Benz</p>
            <h1 className={`text-[52px] pl-4 font-varela text-white`}>The Future Are Here!</h1>
            <div className="w-full h-96 sm:flex justify-center">
                <div className="sm:w-full">
                    <img
                    src={car}
                    alt="car"
                    width={100}
                    height={100}
                    className="xs:w-full sm:border-r-2"
                    />

                </div>  
                <div className="sm:w-1/2 xs:h-1/2">
                    <img
                    src={carblack}
                    alt="carblack"
                    width={100}
                    height={100}
                    className="xs:w-full brightness-50"
                    />
                </div>

                <div className="sm:w-1/2 xs:mt-40 xs:h-1/2">
                    <img
                    src={carro}
                    alt="carro"
                    width={100}
                    height={100}
                    className="xs:w-full brightness-100"
                    />
                </div>
                
            </div>
            
        </div>
    </section>
)


export default Banner