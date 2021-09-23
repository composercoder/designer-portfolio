import WorkPost from '/components/WorkPost/WorkPost';

const WorksList = () => {
  return ( 
    <div style={{paddingTop: '3em', paddingBottom: '3em'}}>
      <WorkPost img_src={"img/post1.jpg"} title={"Designing Dashboards"} date={"2021"} topic={"Dashboard"} />
      <WorkPost img_src={"img/post2.jpg"} title={"Vibrant Portraits of 2020"} date={"2020"} topic={"Illustration"} />
      <WorkPost img_src={"img/post3.jpg"} title={"36 Days of Malayalam type"} date={"2020"} topic={"Typography"} />
      <WorkPost img_src={"img/post4.png"} title={"Components"} date={"2019"} topic={"Components, Design"} />
    </div>
   );
}
 
export default WorksList;