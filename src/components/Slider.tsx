import { FC } from "react"
import SliderLinks from "./SliderLinks"

const Slider: FC = () => {
    return (
        <div className="header-secondry mt-[60px] h-[478px] xl:h-[80vh]">
            <div className="container mx-auto">
                <div className="flex">
                <div className="w-full xl:w-1/2 flex justify-center items-center xl:justify-start xl:items-start xl:pt-44"><SliderLinks/></div>
                <div className=" hidden xl:block xl:w-1/2 relative "><img className="absolute top-[30%] right-[20%]" src="./assets/images/mockup-phone.png"></img></div>
                </div>
            </div>
        </div>
    )
}

export default Slider