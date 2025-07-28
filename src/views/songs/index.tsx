import style from './index.module.less';
import SongItem from '@/views/songs/songItem';
import { useEffect } from 'react';
import { setSongList } from '@/features/song';
import { shallowEqual, useSelector } from 'react-redux';
import type { RootState } from '@/app/store.ts';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';

const SongList = () => {
  const dispatch = useAppDispatch();
  const songList = useSelector((state: RootState) => state.song.songList, shallowEqual);

  useEffect(() => {
    dispatch(
      setSongList([
        {
          id: '1',
          name: '东风破',
          singer: '周杰伦',
          record: '十月',
          timeDuration: '4:30',
          imgUrl:
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=center',
          isPlaying: false,
        },
        {
          id: '2',
          name: '菊花台',
          singer: '周杰伦',
          record: '电影',
          timeDuration: '3:25',
          imgUrl:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center',
          isPlaying: false,
        },
      ])
    );
  }, []);

  return (
    <div className={style.songListContainer}>
      <div className={style.songListContent}>
        {songList.map((song, index) => (
          <SongItem key={index} song={song}></SongItem>
        ))}
      </div>
    </div>
  );
};

export default SongList;
