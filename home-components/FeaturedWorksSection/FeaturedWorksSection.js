import Container from '/components/Container/Container';
import SectionTitle from '/components/SectionTitle/SectionTitle';
import WorkPost from '/components/WorkPost/WorkPost';

import style from './FeaturedWorksSection.module.scss';

const FeaturedWorksSection = () => {
  return ( 
    <section className={style.featured_works_section}>
      <Container className={style.featured_works_section__container}>
        <SectionTitle text="Featured Works" />
        <WorkPost img_src="img/post1.jpg" title="Designing Dashboards" date="2020" topic="Dashboard" />
        <WorkPost img_src="img/post2.jpg" title="Vibrant Portraits of 2020" date="2018" topic="Illustration" />
        <WorkPost img_src="img/post3.jpg" title="36 Days of Malayalam type" date="2018" topic="Typography" />
      </Container>
    </section>
   );
}
 
export default FeaturedWorksSection;