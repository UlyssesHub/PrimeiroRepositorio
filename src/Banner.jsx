import Button from './styles/Button.module.css'
import Section from './styles/Section.module.css'
import BannerCss from './styles/Banner.module.css'


function Banner() {
    return (
        <>
        <div id={BannerCss.bannerContainer}>
            <div id={BannerCss.banner} className={Section.m1}>
                <h2>Em sua primeira compra <strong><span>40% Off</span></strong> para todos os livros </h2>
                <button className={Button.normal}>CONFERIR</button>
            </div>
            </div>    
        </>
    )
}

export default Banner