import MainContainer from '/components/MainContainer/MainContainer';
import GreetingSection from '/home-components/GreetingSection/GreetingSection';
import RecentPostsSection from '/home-components/RecentPostsSection/RecentPostsSection';
import FeaturedWorksSection from '/home-components/FeaturedWorksSection/FeaturedWorksSection';

const Index = () => {
  return ( 
    <MainContainer title="Web-designer portfolio" activeLink="Home">
      <>
        <GreetingSection />
        <RecentPostsSection />
        <FeaturedWorksSection />
      </>
    </MainContainer>
   );
}
 
export default Index;