import { useState } from 'react';
// ذخیره به شکل یک آرایه
const tabsData = [
  {
    id: 'classic',
    title: 'تپسی کلاسیک',
    image: 'https://tapsi.ir/images/home/cc-classic.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="classic service image">
          <picture>
            <source srcSet="https://tapsi.ir/images/home/illus-classic.webp" type="image/webp" />
            <source srcSet="https://tapsi.ir/images/home/illus-classic.png" type="image/png" />
            <img
              className="img-responsive no-padding main-image"
              src="https://tapsi.ir/images/home/illus-classic.png"
              alt="tapsi-classic"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="classic service title">
            تپسی کلاسیک
          </h3>
          <p className="description font-vazir-thin">
            با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی
            کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است.
            در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'motopeyk',
    title: 'موتوپیک',
    image: 'https://tapsi.ir/images/home/cc-motopeyk.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="motopeyk service image">
          <picture>
            <source
              srcSet="https://tapsi.ir/images/home/illus-motopeyk.webp"
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://tapsi.ir/images/home/illus-motopeyk.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <img
              className="img-responsive no-padding main-image"
              alt="motopeyk"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="motopeyk service title">
            موتوپیک
          </h3>
          <p className="description font-vazir-thin">
            با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد
            ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به
            مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را
            به صورت لحظه‌ای روی نقشه دنبال کنید.
          </p>
          <div className="mt-auto">
            <div className="links-wrapper">
              <a href="/moto-peyk">آشنایی با موتوپیک</a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'autopeyk',
    title: 'اتوپیک',
    image: 'https://tapsi.ir/images/home/cc-autopeyk.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="autopeyk service image">
          <picture>
            <source
              srcSet="https://tapsi.ir/images/home/illus-autopeyk.webp"
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://tapsi.ir/images/home/illus-autopeyk.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <img
              className="img-responsive no-padding main-image"
              alt="autopeyk"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="autopeyk service title">
            اتوپیک
          </h3>
          <p className="description font-vazir-thin">
            اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی
            مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین
            جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد
            لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'again1',
    title: 'تپسی کلاسیک',
    image: 'https://tapsi.ir/images/home/cc-classic.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="classic service image">
          <picture>
            <source srcSet="https://tapsi.ir/images/home/illus-classic.webp" type="image/webp" />
            <source srcSet="https://tapsi.ir/images/home/illus-classic.png" type="image/png" />
            <img
              className="img-responsive no-padding main-image"
              src="https://tapsi.ir/images/home/illus-classic.png"
              alt="tapsi-classic"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="classic service title">
            تپسی کلاسیک
          </h3>
          <p className="description font-vazir-thin">
            با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی
            کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است.
            در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'again2',
    title: 'موتوپیک',
    image: 'https://tapsi.ir/images/home/cc-motopeyk.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="motopeyk service image">
          <picture>
            <source
              srcSet="https://tapsi.ir/images/home/illus-motopeyk.webp"
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://tapsi.ir/images/home/illus-motopeyk.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <img
              className="img-responsive no-padding main-image"
              alt="motopeyk"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="motopeyk service title">
            موتوپیک
          </h3>
          <p className="description font-vazir-thin">
            با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد
            ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به
            مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را
            به صورت لحظه‌ای روی نقشه دنبال کنید.
          </p>
          <div className="mt-auto">
            <div className="links-wrapper">
              <a href="/moto-peyk">آشنایی با موتوپیک</a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'again3',
    title: 'اتوپیک',
    image: 'https://tapsi.ir/images/home/cc-autopeyk.png',
    content: (
      <div className='flex flex-nowrap flex-row-reverse'>
        <div className="service-image hidden lg:block lg:w-[40%]" aria-label="autopeyk service image">
          <picture>
            <source
              srcSet="https://tapsi.ir/images/home/illus-autopeyk.webp"
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet="https://tapsi.ir/images/home/illus-autopeyk.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <img
              className="img-responsive no-padding main-image"
              alt="autopeyk"
            />
          </picture>
        </div>
        <div className="content-container lg:w-[60%]">
          <h3 className="title text-2xl mb-7" aria-label="autopeyk service title">
            اتوپیک
          </h3>
          <p className="description font-vazir-thin">
            اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی
            مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین
            جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد
            لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.
          </p>
        </div>
      </div>
    ),
  },
];
///////////////////////////////////////////////////////////////////
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("classic");

  return (
    <div className="container mx-auto px-4 mt-[100px]" aria-label="services section container">
      <h2 className="text-2xl text-center font-bold mb-8" aria-label="services section title">
        سرویس‌های تپسی
      </h2>
      
      {/* منوی تب */}

      <nav>
        <div className="flex overflow-x-auto space-x-4 p-1 border-b border-gray-200 gap-x-5" id="nav-tab" role="tablist">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col justify-center items-center hover:opacity-100 min-w-[100px] flex-1 lg:p-6 p-2 text-center font-medium text-gray-500 hover:text-gray-700 opacity-50 rounded-t-lg ${selectedTab === tab.id ? 'opacity-100' : ''}`} onClick={() => setSelectedTab(tab.id)}
              id={`nav-${tab.id}-tab`}
              data-toggle="tab"
              aria-controls={`nav-${tab.id}`}
              aria-selected={tab.id === selectedTab}
            >
              <img src={tab.image} aria-label={`${tab.title} service icon`} alt={`${tab.title}-icon`} className="inline-block mr-2 " />
              <p className="whitespace-nowrap">{tab.title}</p>
            </button>
          ))}
        </div>
      </nav>

      {/* قسمت کانتنت */}
      
      <div className="tab-content pt-5" id="nav-tabContent">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${selectedTab === tab.id ? 'block' : 'hidden'}`}
            id={`nav-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`nav-${tab.id}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
