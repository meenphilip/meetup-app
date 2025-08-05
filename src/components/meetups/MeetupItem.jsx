import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";

const MeetupItem = ({ id, title, image, address, description }) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  // Function to toggle favorite status
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        image,
        address,
        description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites "}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
