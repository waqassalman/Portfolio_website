import HomeBanner from './home-banner'
import Skills from './skills';
import Education from './education';
import AboutMe from './about-me';
import Projects from './projects';


export function LandingPage() {

  return (
    <>
    <HomeBanner/>
    <Skills/>
    <Education/>
    <AboutMe/>
    <Projects/>
    </>
  )
}

export default LandingPage;