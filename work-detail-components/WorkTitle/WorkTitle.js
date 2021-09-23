import style from './WorkTitle.module.scss';

const WorkTitle = ({text}) => {
  return ( 
    <h1 className={style['work-title']}>{text}</h1>
   );
}
 
export default WorkTitle;