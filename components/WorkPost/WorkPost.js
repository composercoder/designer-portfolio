import Link from 'next/link';
import Paragraph from '/components/Paragraph/Paragraph';

import style from './WorkPost.module.scss';

const WorkPost = ({img_src, title, date, topic}) => {
  return ( 
    <div className={style.work_post}>
      <img className={style.work_post__img} alt="Designing Dashboards" src={img_src}/>
      <div className={style.work_post__text_wrapper}>
        <Link href="/work-detail/work-1"><a className={style.work_post__title}>{title}</a></Link>
        <div className={style.work_post__date_and_topic}>
          <span className={style.work_post__date}>{date}</span>
          <span className={style.work_post__topic}>{topic}</span>
        </div>
        <Paragraph text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      </div>
    </div>
   );
}
 
export default WorkPost;