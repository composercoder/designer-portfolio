import MainContainer from '/components/MainContainer/MainContainer';
import Article from '/article-components/Article/Article-3';

const articleId = () => {
  return ( 
    <MainContainer title="Color Styles" children={
      <Article />
    } />
   );
}
 
export default articleId;