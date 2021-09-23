
import style from './WorkDateAndKeywords.module.scss';

const WorkDateAndKeywords = ({date, keywords}) => {
  return ( 
    <div className={style['date-and-keywords']}>
      <span className={style['date-and-keywords__date']}>{date}</span>
      <span className={style['date-and-keywords__keywords']}>{keywords}</span>
    </div>
   );
}
 
export default WorkDateAndKeywords;