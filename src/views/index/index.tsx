import Header from '@/components/Header';
import styles from './index.module.less';
import SongList from '@/views/songs';
import Player from '@/views/player';

const Index = () => {
  return (
    <div className={styles.indexContainer}>
      <Header></Header>
      <SongList></SongList>
      <div className={styles.bottom}>
        <Player></Player>
      </div>
    </div>
  );
};

export default Index;
