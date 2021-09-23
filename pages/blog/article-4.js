import MainContainer from '/components/MainContainer/MainContainer';
import Article from '/article-components/Article/Article-4';

const articleId = () => {
  return ( 
    <MainContainer title="Position, Size, Rotation, & Corner Radius properties" children={
      <Article />
    } />
   );
}
 
export default articleId;