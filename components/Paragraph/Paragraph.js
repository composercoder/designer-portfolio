import style from './Paragraph.module.scss';

const Paragraph = ({text}) => {
  return ( 
    <p className={style.paragraph}>{text}</p>
   );
}
 
export default Paragraph;