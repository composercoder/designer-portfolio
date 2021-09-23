import MainContainer from '/components/MainContainer/MainContainer';
import Work from '/work-detail-components/Work/Work';

const WorkPage = () => {
  return ( 
    <MainContainer title="Designing Dashboards with usability in mind" children={<Work />} />
   );
}
 
export default WorkPage;