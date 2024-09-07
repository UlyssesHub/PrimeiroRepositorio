import Button from './styles/Button.module.css'
import Section from './styles/Section.module.css'
import BannerCss from './styles/Banner.module.css'
import TwoBannersCss from './styles/TwoBanners.module.css'

function TwoBanners() {
    return (
        <>
        <div id={TwoBannersCss.BannerContainer}>
          <div id={TwoBannersCss.Banner}>
            banner 1
          </div>
          <div id={TwoBannersCss.Banner}>
            banner 2
          </div>
        </div>  
        </>
    )
}

export default TwoBanners