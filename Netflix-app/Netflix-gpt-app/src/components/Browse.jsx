import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      {/* MainContainer
        -videoTitle
        -videobackground
      secondarycontainer
        movieList
          -card */}
        <MainContainer></MainContainer>
        <SecondaryContainer></SecondaryContainer>
    </>
  );
};
export default Browse;
