import style from './Headingh1.module.scss';

const Headingh1 = ({text}) => {
  return ( 
    <h1 className={style.headingh1}>{text}</h1>
   );
}
 
export default Headingh1;