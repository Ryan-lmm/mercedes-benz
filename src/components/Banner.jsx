import { mercedes } from "../assets"

const Banner = () => (
    <section className={`flex my-6 text-white`}>
        <div>
            <p className={`text-[16px] pl-4 font-fredoka text-slate-500`}>Mercedes-Benz</p>
            <h1 className={`text-[52px] pl-4 font-varela text-white`}>The Future Are Here!</h1>
            <div className="w-full h-96 sm:flex justify-center">
                <div className="xs:w-full">
                    <img
                    src={mercedes}
                    alt="car"
                    className="xs:w-full"
                    />
                </div>   
            </div>
            
        </div>
    </section>
)


export default Banner