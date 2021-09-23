import ArticleTitle from '/article-components/ArticleTitle/ArticleTitle';
import ArticleSubtitle from '/article-components/ArticleSubtitle/ArticleSubtitle';
import ArticleContainer from '/article-components/ArticleContainer/ArticleContainer';
import ArticleIntroduction from '/article-components/ArticleIntroduction/ArticleIntroduction';
import ArticleHeading from '/article-components/ArticleHeading/ArticleHeading';
import ArticleSingleListItem from '/article-components/ArticleSingleListItem/ArticleSingleListItem';
import ArticleLinkList from '/article-components/ArticleLinkList/ArticleLinkList';
import ArticleList from '/article-components/ArticleList/ArticleList';

import style from './Article.module.scss';
import specificHeaderStyle from '/article-components/ArticleHeader/Article-1-header.module.scss';

const Article = () => {
  return ( 
    <div className={style.article}>
      <div className={specificHeaderStyle['article-1-header']}>
        <ArticleTitle text={"Gradients"} />
        <ArticleSubtitle text={"Working with gradients on Figma"} />
      </div>
      <ArticleContainer>
        <ArticleIntroduction text={"Gradients enable your design to leave a better impression compared to solid colors. These are mainly used for buttons and backgrounds but you can also use them for text layers. There are several types of gradients. In this tutorial, we'll add a linear gradient."} />
        <ArticleHeading text={"Resources"} />
        <ArticleLinkList items={[['Eggradients', 'https://www.eggradients.com/'], ['UI Gradients', 'https://uigradients.com/#Atlas'], ['WebGradients', 'https://webgradients.com/'], ['Gradient Buttons', 'https://gradientbuttons.colorion.co/'], ['CoolHue', 'https://webkul.github.io/coolhue/'], ['Grabient', 'https://www.grabient.com/'], ['Gradient Hunt', 'https://gradienthunt.com/']]}/>
        <ArticleHeading text={"Gradient styles"} />
        <p className={style.article__paragraph}>Before applying gradients to our layers, let's first learn about different types of gradients. Every gradient has a starting point from where the colors start before blending into other colors. There are four gradients that we can use in Figma:</p>
        <ArticleSingleListItem strongText={"Linear:"} text={"This is the most common and widely used gradient out there. In a linear gradient, the colors of the gradient blend from start color to end color in a straight line"} />
        <img className={style.article__image} src={"/img/article-1-img/1.jpg"} />
        <ArticleSingleListItem strongText={"Radial:"} text={"A radial gradient is the one in which the color has one starting point and then it emanates outward"}/>
        <img className={style.article__image} src={"/img/article-1-img/2.jpg"} />
        <ArticleSingleListItem strongText={"Angle:"} text={"In this, you can use angles to define the direction of your gradient. Starts counter clockwise and the space between the start and the end points defines the angle"}/>
        <img className={style.article__image} src={"/img/article-1-img/3.jpg"} />
        <ArticleSingleListItem strongText={"Diamond:"} text={"Just like its name, this gradient creates a diamond shape from the starting point"}/>
        <img className={style.article__image} src={"/img/article-1-img/4.jpg"} />
        <ArticleHeading text={"Text Gradient"} />
        <p className={style.article__paragraph}>Just like you would to any shape, you can add gradients to text elements as well. Simply head over to Fill and replace the solid color with one of the gradients according to your preference.</p>
        <img className={style.article__image} src={"/img/article-1-img/5.png"} />
        <ArticleHeading text={"Shape Gradient"} />
        <p className={style.article__paragraph}>Every gradient has a starting color point from where the color starts before blending with other colors at some point. Even though we'll be focusing on adding a linear gradient in this tutorial, we've a few other options as well which we've covered above. Feel free to choose an gradient option. You can visit sites mentioned under Resources to use pre-made gradients in your design.</p>
        <img className={style.article__image} src={"/img/article-1-img/6.jpg"} />
        <ArticleHeading text={"Adding Gradient"} />
        <p className={style.article__paragraph}>Learn to creating interesting backgrounds using Gradients.</p>
        <ArticleList items={[
          "Draw a Circle, click on the color in Fill to open the color palette", 
          "In the dropdown, instead of Solid, select Linear", 
          "Using the color-picker, set the 1st gradient color to the accent color",
          "Set the 2nd gradient color to #FFFFFF and the opacity to 0%",
          "Duplicate the Circle and resize it",
          "Set the gradient for it in the same manner we did before. You can choose your preferred colors"
        ]} />
        <img className={style.article__image} src={"/img/article-1-img/7.jpg"} />
        <ArticleHeading text={"Conclusion"} />
        <p className={style.article__paragraph}>{"In this tutorial, we went over how to apply and use gradient styles to objects & text elements. Using gradients can make your designs a lot more vibrant and appealing to the users."}</p>
        <a className={style['article__link-to-original']} href={"https://designcode.io/figma-handbook-gradients"} target="_blank">Original article: https://designcode.io/figma-handbook-gradients</a>
      </ArticleContainer>
    </div>
   );
}

export default Article;