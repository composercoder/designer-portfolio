import Container from '/components/Container/Container';
import Headingh1 from '/components/Headingh1/Headingh1';
import BlogPostList from '/blog-components/BlogPostList/BlogPostList';

import style from './BlogSection.module.scss';

const BlogSection = () => {
  return ( 
    <section className={style.blog_section}>
      <Container>
        <Headingh1 text="Blog"/>
        <BlogPostList />
      </Container>
    </section>
   );
}
 
export default BlogSection;