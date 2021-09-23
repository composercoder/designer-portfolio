import MainContainer from '/components/MainContainer/MainContainer';
import Article from '/article-components/Article/Article-2';

const articleId = () => {
  return ( 
    <MainContainer title="Dark Mode with Selection Colors" children={
      <Article />
    } />
   );
}
 
export default articleId;