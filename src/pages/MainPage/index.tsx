import ListLaunches from '../../components/ListLaunches';
import style from './style.module.scss';

const MainPage = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <ListLaunches />
      </div>
    </div>
  );
};

export default MainPage;
