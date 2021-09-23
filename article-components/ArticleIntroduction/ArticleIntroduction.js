import style from './ArticleIntroduction.module.scss';

const ArticleIntroduction = ({text}) => {
  return ( 
    <p className={style['article-introduction']}>{text}</p>
   );
}
 
export default ArticleIntroduction;