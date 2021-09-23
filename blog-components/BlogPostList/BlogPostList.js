import Post from '/components/Post/Post';

import style from './BlogPostList.module.scss';

const postsArray = [
  <Post modifiedClassName="post--from-blog" url="/blog/article-1" title="Gradients" date="12 Sep 2021" keywords="Design, Figma" key="0" text="When choosing dark mode colors, use dark shades for distant elements, and light shades for closer elements as distant elements receive less light compared to the elements that appear nearer. The further the object, the darker it appears and settles more into the background..." />,
  <Post modifiedClassName="post--from-blog" url="/blog/article-2" title="Dark Mode with Selection Colors" date="28 Aug 2021" keywords="Design, Figma" key="1" text="Before applying gradients to our layers, let's first learn about different types of gradients. Every gradient has a starting point from where the colors start before blending into other colors. There are four gradients that we can use in Figma..." />,
  <Post modifiedClassName="post--from-blog" url="/blog/article-3" title="Color Styles" date="15 Aug 2021" keywords="Design, Figma" key="2" text="Like Grids, Colors and Gradients can be saved as styles. This is important when it comes to reusing certain styles. Saved styles make the design process more consistent. Most designs need different colors to be used mainly for the following: backgrounds..." />,
  <Post modifiedClassName="post--from-blog" url="/blog/article-4" title="Position, Size, Rotation, & Corner Radius properties" date="10 Jul 2021" keywords="Design, Figma" key="3" text="In any design project, whatever you place an element in your frame or artboard, it will fall into a position. Position properties consist of the X-axis and Y-axis. In Figma, these are located after the Alignment..." />
];

const BlogPostList = () => {
  return ( 
    <div className={style["blog-post-list"]}>
      { postsArray.map((post, id) => { return post }) }
    </div>
   );
}
 
export default BlogPostList;