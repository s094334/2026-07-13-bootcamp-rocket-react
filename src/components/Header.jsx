import { Link } from "react-router";
import bannerBg from '../assets/banner/banner-bg.png'
import rocketLogosm from '../assets/banner/banner-logo-rocket-sm.svg'
import rocketLogolg from '../assets/banner/banner-logo-rocket-lg.svg'
import rocketBtnsm from '../assets/banner/banner-btn-rocket-sm.svg'
import rocketBtnlg from '../assets/banner/banner-btn-rocket-lg.svg'
import coworkingLogosm from '../assets/banner/banner-logo-coworking-sm.svg'
import coworkingLogolg from '../assets/banner/banner-logo-coworking-lg.svg'
import coworkingBtnsm from '../assets/banner/banner-btn-coworking-sm.svg'
import coworkingBtnlg from '../assets/banner/banner-btn-coworking-lg.svg'

function Header() {
  return (
    <>
      <header className="flex justify-center py-2 font-bold [&>p]:px-4 [&>p]:py-3 text-neutral-700 whitespace-nowrap overflow-hidden">
        <p>Let’s join</p>
        <p>- 火箭隊培訓營 Rocket -</p>
        <p>- 共同空間 Co-working space -</p>
      </header>
      <section style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="flex md:hidden flex-col items-center py-15 gap-[46px]">
          <div className="pr-10">
            <div className="max-w-[294px] bg-neutral-white rounded-border-m border-2 border-neutral-300 relative">
              <Link to="/">
                <div className="flex items-center mt-6">
                  <img
                    src={ rocketLogosm }
                    alt="Banner logo"
                    className="ml-6 mr-2"
                  />
                  <h1 className="m-0 leading-none font-bold text-mobile-h1 text-neutral-700 mt-[5px]">
                    火箭隊
                  </h1>
                </div>
                <h2 className="font-bold text-mobile-h4 text-neutral-500 ml-7 mt-2 mb-6 mr-[94px] whitespace-nowrap">
                  Bootcamp Rocket
                </h2>
                <img
                  src={ rocketBtnsm }
                  alt="Banner button"
                  className="absolute -right-10 top-7"
                />
              </Link>
            </div>
          </div>
          <div className="pr-10">
            <div className="max-w-[294px] bg-neutral-white rounded-border-m border-2 border-neutral-300 relative">
              <Link to="/coworking">
                <div className="flex items-center mt-6">
                  <img
                    src={ coworkingLogosm }
                    alt="Banner logo"
                    className="ml-6 mr-2"
                  />
                  <h2 className="m-0 leading-none font-bold text-mobile-h1 text-neutral-700 mt-[5px]">
                    共同空間
                  </h2>
                </div>
                <h2 className="font-bold text-mobile-h4 text-neutral-500 ml-7 mt-2 mb-6 mr-[94px] whitespace-nowrap">
                  Co-working Space
                </h2>
                <img
                  src={ coworkingBtnsm }
                  alt="Banner button"
                  className="absolute -right-10 top-7"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex pt-23 pb-25 justify-center items-center">
          <div className="bg-neutral-white rounded-border-l border-2 border-neutral-300 max-w-110 max-h-112 w-full relative">
            <Link to="/" className="flex flex-col items-center">
              <h1 className="font-bold text-desktop-h1 text-neutral-700 absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                火箭隊
              </h1>
              <h2 className="font-bold text-desktop-body1 text-neutral-500 pt-9 text-center">
                Bootcamp Rocket
              </h2>
              <img
                src={ rocketLogolg }
                alt="Rocket logo"
                className="max-w-31 mt-6 mb-4"
              />
              <div className="text-neutral-700 font-bold [&>p]:leading-others text-desktop-body2 flex flex-col items-center mb-[107px]">
                <p># 軟體工程師培訓營</p>
                <p># 全程免費的扎實訓練</p>
                <p># 帶你翻轉人生！</p>
              </div>
              <img
                src= { rocketBtnlg }
                alt="Rocket button"
                className="absolute -bottom-15 left-1/2 -translate-x-1/2"
              />
            </Link>
          </div>
          <span className="text-neutral-700 font-bold text-desktop-h1 self-center my-[34px] ml-[82px] mr-[83px] font-display">
            X
          </span>
          <div className="bg-neutral-white rounded-border-l border-2 border-neutral-300 max-w-110 max-h-112 w-full relative hover:-translate-y-4 duration-500">
            <Link to="/coworking" className="flex flex-col items-center">
              <h2 className="font-bold text-desktop-h1 text-neutral-700 absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                共同空間
              </h2>
              <h2 className="font-bold text-desktop-body1 text-neutral-500 pt-9 text-center">
                Co-working Space
              </h2>
              <img
                src={ coworkingLogolg }
                alt="Rocket logo"
                className="max-w-31 mt-6 mb-4"
              />
              <div className="text-neutral-700 font-bold [&>p]:leading-others text-desktop-body2 flex flex-col items-center mb-[107px]">
                <p># 超 chill 的共同工作場域</p>
                <p># 餅乾、零食、咖啡應有盡有</p>
                <p># 等你來一同交流成長</p>
              </div>
              <img
                src= { coworkingBtnlg }
                alt="Rocket button"
                className="absolute -bottom-15 left-1/2 -translate-x-1/2"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header