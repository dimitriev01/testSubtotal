import { ILaunch } from '../../types/launches';
import style from './style.module.scss';

interface LaunchProps {
  launch: ILaunch;
}

const Launch: React.FC<LaunchProps> = ({ launch }) => {
  return (
    <div role="menuitem" className={style.launchItem}>
      <div>Name: {launch.name}</div>
      <div>Date: {new Date(launch.date_utc).toLocaleDateString()}</div>
      <div>Details: {launch.details}</div>
      <div>
        <img src={launch.links.patch.small} alt="no image" />
      </div>
    </div>
  );
};

export default Launch;
