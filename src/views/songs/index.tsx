import style from './index.module.less';
import SongItem from '@/views/songs/songItem';
import { useState } from 'react';

export interface ISongItem {
  id: number;
  name: string;
  singer: string;
  record: string;
  timeDuration: string;
  imgUrl: string;
  isPlaying: boolean;
}

const SongList = () => {
  const [songList, setSongList] = useState<ISongItem[]>([
    {
      id: 1,
      name: '东风破',
      singer: '周杰伦',
      record: '十月',
      timeDuration: '4:30',
      imgUrl:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=center',
      isPlaying: false,
    },
    {
      id: 2,
      name: '菊花台',
      singer: '周杰伦',
      record: '电影',
      timeDuration: '3:25',
      imgUrl:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center',
      isPlaying: false,
    },
  ]);

  const changeSongPlayStatus = (id: number) => {
    setSongList((songList) => {
      return songList.map((song) => {
        if (song.id === id) {
          return { ...song, isPlaying: !song.isPlaying };
        }
        return song;
      });
    });
  };

  return (
    <div className={style.songListContainer}>
      <div className={style.songListContent}>
        {songList.map((song, index) => (
          <SongItem key={index} song={song} onChangeStatus={changeSongPlayStatus}></SongItem>
        ))}
      </div>
    </div>
  );
};

export default SongList;
