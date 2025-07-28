import React from 'react';
import type { SongItemProps } from '@/views/songs/songItem';
import styles from './index.module.less';

const SongInfo: React.FC<SongItemProps> = ({ song }) => {
  return (
    <div className={styles.songDetail}>
      <img src={song.imgUrl} alt="" />
      <div>
        <span className={styles.songName}>{song.name}</span>
        <span className={styles.singer}>{song.singer}</span>
      </div>
    </div>
  );
};

export default SongInfo;
