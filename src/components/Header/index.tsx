import styles from './index.module.less';
import search from '@/assets/images/search.svg';
import user from '@/assets/images/user.svg';
import notice from '@/assets/images/notice.svg';

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
            <img src={search} alt="" />
            <input type="text" />
          </div>

          <div className={styles.user}>
            <div>
              <img src={notice} alt="" />
            </div>
            <div>
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
