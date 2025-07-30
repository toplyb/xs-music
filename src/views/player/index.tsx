import styles from './index.module.less';
import SongInfo from '@/views/songs/songInfo';
import RandomSvg from '@/assets/images/player/random.svg?react';
import PreviousSvg from '@/assets/images/player/previous.svg?react';
import PlaySvg from '@/assets/images/player/play.svg?react';
import PauseSvg from '@/assets/images/player/pause.svg?react';
import NextSvg from '@/assets/images/player/next.svg?react';
import OrderSvg from '@/assets/images/player/order.svg?react';
import VolumeSvg from '@/assets/images/player/volume.svg?react';
import Progress from '@/components/Progress';

const Player = () => {
  const song = {
    id: '1',
    name: '东风破',
    singer: '周杰伦',
    record: '十月',
    timeDuration: '4:30',
    imgUrl:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=center',
    isPlaying: false,
  };

  const isPlaying = () => {
    if (song.isPlaying) {
      return (
        <button className={styles.bg}>
          <PauseSvg></PauseSvg>
        </button>
      );
    } else {
      return (
        <button className={styles.bg}>
          <PlaySvg></PlaySvg>
        </button>
      );
    }
  };

  const handlerMusicProgress = (value: number) => {
    console.log(value);
  };

  const handlerVolumeProgress = (value: number) => {
    console.log(value);
  };

  return (
    <div className={styles.playerContainer}>
      <div className={styles.left}>
        <SongInfo song={song}></SongInfo>
      </div>
      <div className={styles.center}>
        <div className={styles.top}>
          <button>
            <RandomSvg></RandomSvg>
          </button>
          <button>
            <PreviousSvg></PreviousSvg>
          </button>
          {isPlaying()}
          <button>
            <NextSvg></NextSvg>
          </button>
          <button>
            <OrderSvg></OrderSvg>
          </button>
        </div>
        <div className={styles.bottom}>
          <span className={styles.time}>0:00</span>
          <Progress onChange={handlerMusicProgress} width="400"></Progress>
          <span className={styles.time}>4:30</span>
        </div>
      </div>
      <div className={styles.right}>
        <VolumeSvg></VolumeSvg>
        <Progress onChange={handlerVolumeProgress} width="100"></Progress>
      </div>
    </div>
  );
};

export default Player;
