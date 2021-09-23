import Link from 'next/link';
import Paragraph from '/components/Paragraph/Paragraph';

import style from './Post.module.scss';

const Post = ({modifiedClassName, url, title, date, keywords, text}) => {
  return ( 
    <div className={style[modifiedClassName]}>
      <Link href={url}>
        <a className={style[modifiedClassName + '__title']}>{title}</a>
      </Link>
      <p className={style[modifiedClassName + '__date-and-keywords']}>{date}     |     <span className={style[modifiedClassName + '__keywords']}>{keywords}</span>
      </p>
      <Paragraph text={text} />
    </div>
   );
}
 
export default Post;