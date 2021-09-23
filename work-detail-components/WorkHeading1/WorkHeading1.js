import style from './WorkHeading1.module.scss';

const WorkHeading1 = ({text}) => {
  return ( 
    <h2 className={style['work-heading1']}>{text}</h2>
   );
}
 
export default WorkHeading1;