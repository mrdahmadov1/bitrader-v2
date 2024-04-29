import styles from './assets/css/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/theme/themeSlice';
import { RootState, AppDispatch } from '@/store/configureStore';
import { useEffect } from 'react';
import { updateThemeVariables } from '@/helpers/updateThemeVariables';

const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  useEffect(() => {
    updateThemeVariables(currentTheme);
  }, [currentTheme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div onClick={handleToggleTheme} className={styles.themeSwitcherContainer}>
        <div className={styles.theme}>
          <img
            src={
              currentTheme === 'light'
                ? 'https://thetork.com/demos/html/bitrader/assets/images/icon/sun.svg'
                : 'https://thetork.com/demos/html/bitrader/assets/images/icon/moon.svg'
            }
            alt="theme icon"
          />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
