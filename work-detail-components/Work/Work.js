import ArticleContainer from '/article-components/ArticleContainer/ArticleContainer';
import WorkTitle from '/work-detail-components/WorkTitle/WorkTitle';
import WorkDateAndKeywords from '/work-detail-components/WorkDateAndKeywords/WorkDateAndKeywords';
import Paragraph from '/components/Paragraph/Paragraph';
import WorkHeading1 from '/work-detail-components/WorkHeading1/WorkHeading1';
import WorkHeading2 from '/work-detail-components/WorkHeading2/WorkHeading2';

import style from './Work.module.scss';

const Work = () => {
  return (
    <ArticleContainer>
      <WorkTitle text="Designing Dashboards with usability in mind" />
      <WorkDateAndKeywords date="2020" keywords="Dashboard, User Experience Design" />
      <Paragraph text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <img className={style['work-image']} src="/img/work-detail/work1.png" />
      <WorkHeading1 text="Heading1" />
      <WorkHeading2 text="Heading2" />
      <Paragraph text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <img className={style['work-image']} src="/img/work-detail/work2.png" />
      <img className={style['work-image']} src="/img/work-detail/work3.png" />
    </ArticleContainer>
   );
}
 
export default Work;