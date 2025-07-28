import React, { useState } from 'react';
import styles from './index.module.less';
import PlaySvg from '@/assets/images/play.svg?react';
import { type ISongItem, setSongStatus } from '@/features/song';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import SongInfo from '@/views/songs/songInfo';

// props 只包含一个 song 对象
export interface SongItemProps {
  song: ISongItem;
}

const SongItem: React.FC<SongItemProps> = ({ song }) => {
  const dispatch = useAppDispatch();
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const handleClickSong = () => {
    dispatch(setSongStatus(song.id));
  };

  const showIdOrImg = () => {
    if (!mouseEnter) {
      return <span>{song.id}</span>;
    } else {
      return <PlaySvg></PlaySvg>;
    }
  };

  return (
    <div
      className={styles.songItemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClickSong}
    >
      <div className={styles.songItemContent}>
        <div className={styles.left}>
          <div className={styles.number}>{showIdOrImg()}</div>
          <SongInfo song={song}></SongInfo>
        </div>
        <div className={styles.right}>
          <span>{song.singer}</span>
          <span className={styles.timeDuration}>{song.timeDuration}</span>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
