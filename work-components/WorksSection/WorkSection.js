import Container from '/components/Container/Container';
import Headingh1 from '/components/Headingh1/Headingh1';
import WorksList from '/work-components/WorksList/WorksList';

const WorkSection = () => {
  return ( 
    <section style={{paddingTop: "7rem", paddingBottom: "4rem"}}>
      <Container>
        <Headingh1 text="Works" />
        <WorksList />
      </Container>
    </section>
   );
}
 
export default WorkSection;