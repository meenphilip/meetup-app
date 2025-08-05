import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeetups = favoritesCtx.favorites;

  if (favoriteMeetups.length === 0) {
    return <h1>You have no favorites yet. Start adding some!</h1>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteMeetups} />
    </section>
  );
};

export default Favorites;
