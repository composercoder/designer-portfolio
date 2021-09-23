import ArticleTitle from '/article-components/ArticleTitle/ArticleTitle';
import ArticleSubtitle from '/article-components/ArticleSubtitle/ArticleSubtitle';
import ArticleContainer from '/article-components/ArticleContainer/ArticleContainer';
import ArticleIntroduction from '/article-components/ArticleIntroduction/ArticleIntroduction';
import ArticleHeading from '/article-components/ArticleHeading/ArticleHeading';
import ArticleList from '/article-components/ArticleList/ArticleList';
import ArticleSingleListItem from '/article-components/ArticleSingleListItem/ArticleSingleListItem';

import style from './Article.module.scss';
import specificHeaderStyle from '/article-components/ArticleHeader/Article-3-header.module.scss';

const Article = () => {
  return ( 
    <div className={style.article}>
      <div className={specificHeaderStyle['article-3-header']}>
        <ArticleTitle text={"Color Styles"} />
        <ArticleSubtitle text={"Working with color styles on Figma"} />
      </div>
      <ArticleContainer>
        <ArticleIntroduction text={"Styles in Figma allow you to specify a set of properties for elements. You can create styles for basically anything, be it Text or Color and even Effects. In this section we'll focus on Color Styles."} />
        <ArticleHeading text={"Color Styles"} />
        <p className={style.article__paragraph}>Like Grids, Colors and Gradients can be saved as styles. This is important when it comes to reusing certain styles. Saved styles make the design process more consistent. Most designs need different colors to be used mainly for the following:</p>
        <ArticleList items={[
          "Backgrounds",
          "Texts",
          "Buttons",
          "Gradients"
        ]} />
        <ArticleHeading text={"Background Color"} />
        <p className={style.article__paragraph}>Let's create some color styles that can be used as background colors. Keep in mind that good design needs good contrast to be legible and to command attention. To achieve this, you can use two opposite colors, like black and white, dark gray and off-white or dark blue and light blue. In our case, we're using these two - #1A2151 and #E3E8FF.</p>
        <img className={style.article__image} src={"/img/article-3-img/1.png"} />
        <ArticleHeading text={"Text Colors"} />
        <p className={style.article__paragraph}>Text colors can be used to structure your typographic content. For the body text, you’d start with black on white, and white on black. For extra texts such as captions and titles, you’d need a couple of other colors. Here, we've the following colors - black, white and #F2F6FF.</p>
        <img className={style.article__image} src={"/img/article-3-img/2.png"} />
        <ArticleHeading text={"Button Colors"} />
        <p className={style.article__paragraph}>These colors need to draw attention. They’re used for actionable items such as buttons, links and clickable areas. They can also be used to express your branding. The colors that we use in this section are - #8352FD, #3913B8, #00CFFD and #2FB5FC.</p>
        <img className={style.article__image} src={"/img/article-3-img/3.png"} />
        <ArticleHeading text={"Gradient Styles"} />
        <p className={style.article__paragraph}>Gradients are used for buttons and backgrounds. You can even use them for text layers in Figma. Let's create one now!</p>
        <ArticleList items={[
          "Create a new frame and add two rectangular shapes to it. This is where we'll set gradients",
          "Next, head over to the dropdown next to Solid in Fill. Select the Linear option",
          "Set the direction of the gradient from top-left to bottom-right",
          "Set the colors to #4539CA and #DF3B3B. Make sure to have opacity for both colors set to 100%",
          "Repeat the same steps for the second shape. Set the colors here to - #9A00F9 and #2EE5A3. We've set the opacity for the first color to 70 but you can set it to your preferred value"
        ]}/>
        <img className={style.article__image} src={"/img/article-3-img/4.png"} />
        <ArticleHeading text={"Saving Color Styles"} />
        <p className={style.article__paragraph}>Now that we have all our colors, it's time to save these styles so we can reuse the same anywhere in our style.</p>
        <ArticleList items={[
          "Select the first text color which is black and click the ': :' icon in Fill",
          "A list should open up, click on the '+' icon at the top. In the text input, type in 'Text' and then, Create Style. This will add it your Local Styles"
        ]} />
        <img className={style.article__image} src={"/img/article-3-img/5.png"} />
        <ArticleSingleListItem text={"Repeat the same process for every color we added as well as for the gradients to add all of these to your local styles"} />
        <img className={style.article__image} src={"/img/article-3-img/6.png"} />
        <ArticleHeading text={"View Styles"} />
        <p className={style.article__paragraph}>You can view the local styles via the Style Picker which refers to the modal that opens up when you click on the ': :' icon in Fill. Once it opens up, you'll see all your local styles listed there. The added color styles are also visible in the Properties panel on the right.</p>
        <img className={style.article__image} src={"/img/article-3-img/7.png"} />

        <ArticleHeading text={"Conclusion"} />
        <p className={style.article__paragraph}>Saving colors, gradients or effects as Styles makes our design process a breeze. By using styles, you can change or edit any colors or effects easily, and by doing so it'll change that style for the whole design at the same time.</p>
        <a className={style['article__link-to-original']} href={"https://designcode.io/figma-handbook-color-styles"} target="_blank">Original article: https://designcode.io/figma-handbook-color-styles</a>
      </ArticleContainer>
    </div>
   );
}
 
export default Article;