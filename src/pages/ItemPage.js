import { useSelector } from "react-redux";

import classNames from "classnames";

import NewsItem from "../components/news/NewsItem";

import styles from "../components/styles/itemPage.module.css";

const ItemPage = () => {
  const theme = useSelector((state) => state.theme.theme);

  const classItemPage = classNames(styles.itemPage, {
    [styles.itemPageDark]: theme === "dark",
  });

  return (
    <div className={classItemPage}>
      <NewsItem />
    </div>
  );
};
export default ItemPage;
