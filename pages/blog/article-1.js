import MainContainer from '/components/MainContainer/MainContainer';
import Article from '/article-components/Article/Article-1';

const articleId = () => {
  return ( 
    <MainContainer title="Gradients" children={
      <Article />
    } />
   );
}
 
export default articleId;