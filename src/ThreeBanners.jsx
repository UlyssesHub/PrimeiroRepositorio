import ThreeBannersCss from './styles/ThreeBanners.module.css'

function ThreeBanners() {
    return (
        <>
        <div id={ThreeBannersCss.BannerContainer}>
          <div id={ThreeBannersCss.Banner}>
            banner 1
          </div>
          <div id={ThreeBannersCss.Banner}>
            banner 2
          </div>
          <div id={ThreeBannersCss.Banner}>
            banner 3
          </div>
        </div>  
        </>
    )
}

export default ThreeBanners