import style from './ArticleSingleListItem.module.scss';

const ArticleListItem = ({strongText, text}) => {
  return ( 
    <ul>
      <li className={style['article-list-item']}><strong>{strongText}</strong> {text}</li>
    </ul>
   );
}
 
export default ArticleListItem;