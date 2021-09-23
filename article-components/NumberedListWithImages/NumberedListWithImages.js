import style from './NumberedListWithImages.module.scss';

const NumberedListWithImages = ({articleId, items}) => {
  return ( 
    <ol className={style.list}>
      {items.map((item, id) => {
        return <li className={style.list__item} key={id}>
          {item.text}
          <img className={style.list__image} src={`/img/article-${articleId}-img/${item.imageSrc}`} />
        </li>
      })}
    </ol>
   );
}
 
export default NumberedListWithImages;