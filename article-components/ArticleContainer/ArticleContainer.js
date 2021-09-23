import style from './ArticleContainer.module.scss';

const ArticleContainer = ({children}) => {
  return ( 
    <div className={style['article-container']}>{children}</div>
   );
}
 
export default ArticleContainer;