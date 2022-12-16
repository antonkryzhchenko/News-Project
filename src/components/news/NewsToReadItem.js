const NewsToReadItem = ({title, content, onClick}) => {
    return (
        <>
        <p>{title}</p>
        <p>{content}</p>
        <button onClick={() => onClick(title)}>Remove from favourites</button>
        </>
    )
}
export default NewsToReadItem;