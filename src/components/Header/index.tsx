import styles from './index.module.less';
import SearchSvg from '@/assets/images/search.svg?react';
import NoticeSvg from '@/assets/images/notice.svg?react';
import UserSvg from '@/assets/images/user.svg?react';

const Header = () => {
  const menuList = [
    {
      index: 0,
      title: 'Home',
      path: '/',
    },
  ];

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoName}>XS</span>
            <span className={styles.logoDetail}>XiaoSheng</span>
          </div>

          <div className={styles.menus}>
            {menuList.map((item) => {
              return (
                <span className={styles.menuItem} key={item.index}>
                  {item.title}
                </span>
              );
            })}
          </div>

          <div className={styles.search}>
            <SearchSvg></SearchSvg>
            <input type="text" />
          </div>

          <div className={styles.user}>
            <div>
              <UserSvg></UserSvg>
            </div>
            <div>
              <NoticeSvg></NoticeSvg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
