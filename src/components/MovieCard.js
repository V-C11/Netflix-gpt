import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null
  return (
    <div className="w-28 md:w-48 pr-4">
      <img  alt="MovieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
