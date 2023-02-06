import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { icons } from "react-icons";

const ServiceCard = ({ icons, title, subtitle, icon }) => {
    <div className=" flex flex-row   justify-start itmes-center white-glassmorphism p-3 m-2 cursor-pointer">
        <div className={'w-10 h-10 ronded-full  flex justify-center items-center '} >
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-2 text-white text-sm md:9">{subtitle}</p>
        </div>


    </div >
}



const Services = () => {

    return (
        <div className=" flex-w- full justify-center items-center gradient-bg-services">
            <div className="  flex mf:flex-row flex-col Items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className=" text-white text-3xl sm:text-5xl">
                        Services that  we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className=" flex-1 flex-col justify-start itme">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="security Guranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="security is guranteed"
                />
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Best Exchange Rate"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="security is guranteed"
                />
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="fatest  transactions "
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="security is guranteed"
                />
            </div>
        </div >
    )

}
export default Services;