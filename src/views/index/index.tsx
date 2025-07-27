import Header from '@/components/Header';
import styles from './index.module.less';
import SongList from '@/views/songs';

const Index = () => {
  return (
    <div className={styles.indexContainer}>
      <Header></Header>
      <SongList></SongList>
    </div>
  );
};

export default Index;
