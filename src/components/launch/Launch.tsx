import { ILaunch } from "../../store/slices/launches/types";
import style from "./style.module.scss";

interface LaunchProps {
  launch: ILaunch;
}

const Launch: React.FC<LaunchProps> = ({ launch }) => {
  return (
    <div className={style.launchItem}>
      <div>Name: {launch.name}</div>
      <div>Date: {new Date(launch.date_utc).toLocaleDateString()}</div>
      <div>Details: {launch.details}</div>
      <div>
        <img src={launch.links.patch.small} alt="image" />
      </div>
    </div>
  );
};

export default Launch;
