import style from './ArticleSubtitle.module.scss';

const ArticleSubtitle = ({text}) => {
  return ( 
    <p className={style['article-subtitle']}>{text}</p>
   );
}
 
export default ArticleSubtitle;