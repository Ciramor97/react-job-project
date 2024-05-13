import Hero from '../components/Hero.jsx';
import HomeCards from '../components/Card/HomeCards.jsx';
import JobListing from '../components/Job/JobListing.jsx';
import ViewAllJob from '../components/ViewAllJob.jsx';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle=" Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJob />
    </>
  );
}
