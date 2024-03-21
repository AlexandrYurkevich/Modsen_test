import "./styles.css";
import "../../shared_styles.css";
import { CircularProgress } from "@mui/material";

export default function LoadingPage() {
  return (
    <div className="full-page-container">
      <CircularProgress size={"30vh"}/>
    </div>
  );
}