import style from './ArticleTitle.module.scss';

const ArticleTitle = ({text}) => {
  return ( 
    <h1 className={style['article-title']}>{text}</h1>
   );
}
 
export default ArticleTitle;