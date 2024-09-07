import OneBannerCss from './styles/OneBanner.module.css'

function ThreeBanners() {
    return (
        <>
        <div id={OneBannerCss.BannerContainer}>
          <div id={OneBannerCss.Banner}>
            banner 1
          </div>
        </div>  
        </>
    )
}

export default ThreeBanners