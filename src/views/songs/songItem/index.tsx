import React, { useState } from 'react';
import type { ISongItem } from '@/views/songs';
import style from './index.module.less';
import playImg from '@/assets/images/play.svg';

// props 只包含一个 song 对象
interface SongItemProps {
  song: ISongItem;
  onChangeStatus: (id: number) => void;
}

const SongItem: React.FC<SongItemProps> = ({ song, onChangeStatus }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  const handleClickSong = () => {
    onChangeStatus(song.id);
  };

  const showIdOrImg = () => {
    if (!mouseEnter) {
      return <span>{song.id}</span>;
    } else {
      return <img src={playImg} alt="" />;
    }
  };

  return (
    <div
      className={style.songItemContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClickSong}
    >
      <div className={style.songItemContent}>
        <div className={style.left}>
          <div className={style.number}>{showIdOrImg()}</div>
          <div className={style.songDetail}>
            <img src={song.imgUrl} alt="" />
            <div>
              <span className={style.songName}>{song.name}</span>
              <span className={style.songRecord}>{song.record}</span>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <span>{song.singer}</span>
          <span className={style.timeDuration}>{song.timeDuration}</span>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
