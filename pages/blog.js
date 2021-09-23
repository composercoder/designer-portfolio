import MainContainer from '/components/MainContainer/MainContainer';
import BlogSection from '/blog-components/BlogSection/BlogSection';

const Blog = () => {
  return ( 
    <MainContainer title="Web-designer blog" activeLink="Blog">
      <BlogSection />
    </MainContainer>
   );
}
 
export default Blog;