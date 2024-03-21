import "./styles.css";
import "../../shared_styles.css";
import SearchOffRoundedIcon from '@mui/icons-material/SearchOffRounded';

export default function PageNotFound() {

  return (
    <div className="full-page-container">
      <div className="columned-container">
        <SearchOffRoundedIcon/>
        Page is not found
      </div>
    </div>
  );
}