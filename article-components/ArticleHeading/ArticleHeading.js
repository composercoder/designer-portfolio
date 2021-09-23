import style from './ArticleHeading.module.scss';

const ArticleHeading = ({text}) => {
  return ( 
    <h1 className={style['article-heading']}>{text}</h1>
   );
}
 
export default ArticleHeading;