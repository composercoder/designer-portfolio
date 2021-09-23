import ArticleTitle from '/article-components/ArticleTitle/ArticleTitle';
import ArticleSubtitle from '/article-components/ArticleSubtitle/ArticleSubtitle';
import ArticleContainer from '/article-components/ArticleContainer/ArticleContainer';
import ArticleIntroduction from '/article-components/ArticleIntroduction/ArticleIntroduction';
import ArticleHeading from '/article-components/ArticleHeading/ArticleHeading';
import ArticleList from '/article-components/ArticleList/ArticleList';

import style from './Article.module.scss';
import specificHeaderStyle from '/article-components/ArticleHeader/Article-4-header.module.scss';

const Article = () => {
  return ( 
    <div className={style.article}>
      <div className={specificHeaderStyle['article-4-header']}>
        <ArticleTitle text={"Position, Size, Rotation, & Corner Radius properties"} />
        <ArticleSubtitle text={"Working with Position, Size, Rotation, & Corner Radius properties"} />
      </div>
      <ArticleContainer>
        <ArticleIntroduction text={"In this following tutorial, we'll learn to use Position, Size, Rotation, & Corner Radius properties in Figma."} />
        <ArticleHeading text={"Position"} />
        <p className={style.article__paragraph}>In any design project, whatever you place an element in your frame or artboard, it will fall into a position. Position properties consist of the X-axis and Y-axis. In Figma, these are located after the Alignment properties at the top-right corner of the Properties panel.</p>

        <p className={style.article__paragraph}>You can select and move an object to change the position it holds, or you can input X and Y values to change the position more precisely. Also, hovering over the X and Y input field, you can scrabble through the right or left to move the object to the X or Y-axis.</p>

        <p className={style.article__paragraph}>Let's see how scrabbling works. Press 'R' on your keyboard or select the Rectangle tool from the Tool panel, and create a rectangle on your canvas. Make sure the Move tool is selected.</p>
        <ArticleList items={[
          "Hover over the X input field, then scrabble to the right to move the object to the right (plus X-axis) of the canvas.",
          "Hover over the X input field, then scrabble to the left to move the object to the left (minus X-axis) of the canvas.",
          "Hover over the Y input field, then scrabble to the right to move the object to the bottom (plus Y-axis) of the canvas.",
          "Hover over the Y input field, then scrabble to the left to move the object to the top (minus Y-axis) of the canvas."
        ]} />
        <img className={style.article__image} src={"/img/article-4-img/1.jpg"} />
        <ArticleHeading text={"Size"} />
        <p className={style.article__paragraph}>Size properties consist of Width (W) and Height (H). These are located after the Position properties at the top of the Properties panel. You can select an object and drag the corner areas to increase or decrease the size, or you can input width and height values (in Pixel) to change the size more precisely. Also, hovering over the Width (W) and Height (H) input field, you can scrabble through right or left to increase or decrease the size.</p>

        <p className={style.article__paragraph}>To understand it better, press 'R' on your keyboard or select the Rectangle tool from the Tool panel, and create a rectangle on your canvas. Make sure the Move tool is selected.</p>
        <ArticleList items={[
          "Hovering over the Width (W) and Height (H) input field, and scrabbling to the right will increase the size.",
          "Hovering over the Width (W) and Height (H) input field, and scrabbling toh the left will decrease the size."
        ]} />
        <p className={style.article__paragraph}>An important thing to note is that, if Constraint Proportions is activated when you're increasing or decreasing the size of the shape, the size will change proportionally.</p>
        <img className={style.article__image} src={"/img/article-4-img/2.jpg"} />
        <ArticleHeading text={"Rotation"} />
        <p className={style.article__paragraph}>Rotation property is located after the Size (W and H) properties at the top of the Properties panel. When you place an object or create a shape on your artboard, by default the angle is set to 0°. You can change the angle at any degree you want.</p>

        <p className={style.article__paragraph}>After selecting an object and hovering over the corner areas you'll see the arrow to rotate the shape. Or, you can input the value (in Degrees) to change the angle more precisely. Also, hovering over the Rotation input field, you can scrabble through the right or left to rotate the shape to the positive or negative values.</p>

        <p className={style.article__paragraph}>Press 'R' on your keyboard, or select the Rectangle tool from the Tool panel, then create a rectangle on your canvas. Make sure the Move tool is selected. Now, let's try scrabbling.</p>
        <ArticleList items={[
          "Hovering over the Rotation input field, and scrabbling to the right will rotate the shape to the right, and the degrees will increase to the Negative (-) values.",
          "Hovering over the Rotation input field, and scrabbling through the left will rotate the shape to the left, and the degrees will increase to the Positive (+) values."
        ]} />
        <img className={style.article__image} src={"/img/article-4-img/3.png"} />
        <ArticleHeading text={"Corner Radius"} />
        <p className={style.article__paragraph}>In this era of User Interface design, we see rounded corners everywhere - mobile applications, desktop applications, websites, browser input fields. You can set rounded corners by changing the radius of the corners. In Figma, the Corner Radius property is located after the Rotation property at the top of the Properties panel. The more you increase the value, the rounder the corners.</p>

        <p className={style.article__paragraph}>After selecting a shape and hovering over its areas you'll see circlular dots on the corners. Hover over the corners, and you'll see arrows to change the radius. You can drag to increase or decrease the radius.</p>

        <p className={style.article__paragraph}>Or, you can input the value (in Pixels) to change the radius more precisely. Also, hovering over the Radius input field, you can scrabble to the right or to the left to increase or decrease the corner radius of the shape.</p>

        <p className={style.article__paragraph}>Let's try scrabbling to change the radius. First, press 'R' on your keyboard, or select the Rectangle tool from the Tool panel to create a rectangle on your canvas. By default the Corner Radius is set to 0, which means the corners are sharp-edged. Now make sure the Move tool is selected.</p>
        <ArticleList items={[
          "Hovering over the Corner Radius input field, and scrabbling to the right will increase the radius, and make the corners rounded.",
          "Hovering over the Corner Radius input field, and scrabbling to the left will decrease the radius, and make the corners sharp."
        ]} />
        <img className={style.article__image} src={"/img/article-4-img/4.png"} />
        <ArticleHeading text={"Conclusion"} />
        <p className={style.article__paragraph}>Whenever you'll work on any of your design projects you'll add, subtract, customize elements every minute until you get the final result. At some point, you'll understand that there's nothing called 'Final' in design. You'll always be improving your shapes, elements, styles, components, layers. To do so, you'll mostly use the most important properties in Figma including the ones we discussed above.</p>
        <a className={style['article__link-to-original']} href={"https://designcode.io/figma-handbook-position-properties"} target="_blank">Original article: https://designcode.io/figma-handbook-position-properties</a>
      </ArticleContainer>
    </div>
   );
}
 
export default Article;