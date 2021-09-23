import Container from '/components/Container/Container';
import Headingh1 from '/components/Headingh1/Headingh1';
import Paragraph from '/components/Paragraph/Paragraph';
import style from './GreetingSection.module.scss';
import containerStyle from './GreetingSection__Container.module.scss';

const GreetingSection = () => {
  return ( 
    <section className={style.greeting_section}>
      <Container specificClassName={containerStyle.greeting_section__container}>
        <div className={style.greeting_section__photo_wrapper}>
          <img className={style.greeting_section__photo} src={"/img/Designer.png"} alt={"John Richards"} />
        </div>
        <div className={style.greeting_section__text_wrapper}>
          <Headingh1 text={"Hi, I am John, web-designer"}/>
          <Paragraph text={"I'm focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites."}/>
          <div className={style.greeting_section__button_wrapper}>
            <a className={style.greeting_section__button} href="https://www.facebook.com/profile.php?id=100071916172494" target="_blank">
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
   );
}
 
export default GreetingSection;