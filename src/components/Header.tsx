import { FC, useState } from "react"


const Header: FC = () => {
    //دکمه باز و بست منو

    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const showMenu = () => {
        setMenuToggle(!menuToggle);
    }
    return (
        <>
            <header className="fixed top-0 w-full bg-gray-100 h-[60px]">
                <div className=" mx-auto bg-transparent overflow-hidden">
                    <div className="flex flex-row-reverse align-middle xl:px-[130px] lg:px-[100px] md:px-[30px] px-[15px] py-3  h-full">
                        <div onClick={showMenu} className=" flex justify-center items-center lg:hidden cursor-pointer "><i className="fa-solid fa-bars align-middle text-4xl"></i></div>
                        <div className="mr-5 lg:flex justify-center items-center hidden">
                            <ul className="flex justify-between items-center min-w-400">
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/">ویدئو ها</a></li>
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/shop">پشتیبانی</a></li>
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/blogs">امور سهام</a></li>
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/about">تپسی پک</a></li>
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/contact">فرصت های شغلی</a></li>
                                <li className="text-center text-base "><a className="p-2 hover:text-tapsi font-vazir-thin" href="/contact">وبلاگ</a></li>
                            </ul>
                            <button className="text-center text-base hidden xl:inline-block bg-tapsi text-white py-2 px-5 rounded-lg hover:-translate-y-1 ease-linear duration-100 mr-2">دانلود تپسی</button>
                        </div>

                        {/* لوگو تپسی */}

                        <div className="ml-auto flex justify-center items-center">
                            <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="102" height="22" viewBox="0 0 102 22">
                                <g fill-rule="evenodd">
                                    <path fill="#000" d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z"></path>
                                    <path fill="#000" d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102z"></path>
                                    <path fill="#FF5B35" d="M26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z"></path>
                                </g>
                            </svg></a>
                        </div>
                    </div>
                    <div className={`bg-white px-2  w-full ${menuToggle ? "h-230" : "h-0"} transition-[height] lg:hidden`}>
                        <ul>
                        
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/">ویدئو ها</a></li>
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/shop">پشتیبانی</a></li>
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/blogs">امور سهام</a></li>
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/about">تپسی پک</a></li>
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/contact">فرصت های شغلی</a></li>
                            <li><a className="block p-2 h-full hover:text-tapsi font-vazir-thin" href="/contact">وبلاگ</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header