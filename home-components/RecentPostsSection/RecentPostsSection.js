import Link from 'next/link';
import Container from '/components/Container/Container';
import SectionTitle from '/components/SectionTitle/SectionTitle';
import Post from '/components/Post/Post';

import style from './RecentPostsSection.module.scss';

const RecentPostsSection = () => {
  return ( 
    <section className={style.recent_posts_section}>
      <Container>
        <div className={style.recent_posts_section__header}>
          <SectionTitle text="Recent Posts"></SectionTitle>
          <Link href="/blog">
            <a className={style.recent_posts_section__link}>View all</a>
          </Link>
        </div>
        <div className={style.recent_posts_section__posts_wrapper}>
          <Post modifiedClassName="post--recent" url="blog/article-4" title="Position, Size, Rotation, & Corner Radius properties" date="12 Feb 2020" keywords="Figma, Properties" text="In any design project, whatever you place an element in your frame or artboard, it will fall into a position. Position properties consist of the X-axis and Y-axis. In Figma, these are located after the Alignment..."/>
          <Post modifiedClassName="post--recent" url="blog/article-3" title="Color Styles" date="25 Aug 2020" keywords="Figma, Colors" text="Like Grids, Colors and Gradients can be saved as styles. This is important when it comes to reusing certain styles. Saved styles make the design process more consistent. Most designs need different colors to be used mainly for the following: backgrounds..." />
        </div>
      </Container>
    </section>
  );
}
 
export default RecentPostsSection;