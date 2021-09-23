import style from './ArticleLinkList.module.scss';

const ArticleLinkList = ({items}) => {
  return ( 
    <ul>
      {items.map((item, id) => {
        return <li className={style['article-link-list__item']} key={id}>
          <a className={style['article-link-list__link']} href={item[1]} target="_blank">{item[0]}</a>
        </li>
      })}
    </ul>
   );
}
 
export default ArticleLinkList;