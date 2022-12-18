import { useSelector } from "react-redux";

import NewsList from "../components/news/NewsList";

import classNames from "classnames";

import styles from "../components/styles/mainPage.module.css";

const MainPage = () => {
  const category = useSelector((state) => state.news.category);
  const theme = useSelector((state) => state.theme.theme);

  const classMainPage = classNames(styles.mainPage, {
    [styles.mainPageDark]: theme === "dark",
  });

  if (!category) {
    return (
      <div className={classMainPage}>
        <NewsList />
      </div>
    );
  }

  return (
    <div className={classMainPage}>
      <NewsList />
    </div>
  );
};
export default MainPage;
