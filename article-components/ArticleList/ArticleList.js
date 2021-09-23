import style from './ArticleList.module.scss';

const ArticleList = ({items}) => {
  return ( 
    <ul className={style['article-list']}>
      {items.map((item, id) => {
        return <li className={style['article-list__item']} key={id}>{item}</li>
      })}
    </ul>
   );
}
 
export default ArticleList;