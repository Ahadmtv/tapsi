
const SliderLinks = () => {
    return (
        <div className="slider-link inline-block rounded-lg p-10 text-white max-w-[580px]">
            <div className="flex flex-col justify-center items-center">
                <div className="mb-3 flex flex-col gap-y-2">
                    <h1 className="text-3xl font-vazir-bold font-bold">تپسی</h1>
                    <p>اپلیکیشن دریافت خودرو و پیک</p>
                </div>
                <div>
                    <ul className="flex flex-col xl:flex-row gap-y-2 xl:flex-wrap xl:justify-center">
                        <div className="xl:w-1/2 xl:px-2">
                        <li className="border-2 border-white bg-white text-black rounded-lg px-3 py-2 hover:bg-black hover:text-white duration-100 ease-linear"><a href="#" className="flex ">
                            <div className="ml-3"><i className="fa-solid fa-arrow-down-long"></i></div>
                            <div className="font-vazir-light">دانلود اپلیکیشن مسافران</div>
                        </a></li>
                        </div>
                        <div className="xl:w-1/2 xl:px-2">
                        <li className="border-2 border-white bg-white text-black rounded-lg px-3 py-2 hover:bg-black hover:text-white duration-100 ease-linear"><a href="#" className="flex ">
                            <div className="ml-3"><i className="fa-solid fa-arrow-down-long"></i></div>
                            <div className="font-vazir-light whitespace-nowrap">وب اپلیکیشن مسافران</div>
                        </a></li>
                        </div>
                        <div className="xl:w-1/2 xl:px-2">
                        <li className="border-2 border-white rounded-lg px-3 py-2 hover:bg-white hover:text-black duration-75 ease-linear"><a href="#" className="flex ">
                            <div className="ml-3"><i className="fa-solid fa-arrow-down-long"></i></div>
                            <div className="font-vazir-light">ثبت نام راننده  خودرو</div>
                        </a></li>
                        </div>
                        <div className="xl:w-1/2 xl:px-2">
                        <li className="border-2 border-white rounded-lg px-3 py-2 hover:bg-white hover:text-black duration-75 ease-linear"><a href="#" className="flex ">
                            <div className="ml-3"><i className="fa-solid fa-arrow-down-long"></i></div>
                            <div className="font-vazir-light">ثبت نام راننده موتور</div>
                        </a></li>
                        </div>
                        <div className="xl:w-1/2 xl:px-2">
                        <li className="border-2 border-white rounded-lg px-3 py-2 hover:bg-white hover:text-black duration-75 ease-linear"><a href="#" className="flex ">
                            <div className="ml-3"><i className="fa-solid fa-arrow-down-long"></i></div>
                            <div className="font-vazir-light">دانلود اپلیکیشن رانندگان</div>
                        </a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SliderLinks