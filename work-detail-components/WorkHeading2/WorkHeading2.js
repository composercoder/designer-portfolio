import style from './WorkHeading2.module.scss';

const WorkHeading2 = ({text}) => {
  return ( 
    <h3 className={style['work-heading2']}>{text}</h3>
   );
}
 
export default WorkHeading2;