function Article({ article })
{
    console.log(article.minutes)

    function longArticle(length)
    {
        let sushi = "🍱"
        let time = length
        while (length > 10)
        {
            length -= 10
            sushi += "🍱"
        }
        return `${sushi} ${time} minute read`
    }
    function shortArticle(length)
    {
        let coffee = "☕️"
        let time = length
        while (length > 5)
        {
            length -= 5
            coffee += "☕️"
        }
        return `${coffee} ${time} minute read`
    }
    
    return (
        <article>
            <h3>{article.title}</h3>
            <small>{article.date || "January 1, 1970"} | {article.minutes>30 ? longArticle(article.minutes) : shortArticle(article.minutes)}</small>
            <p>{article.preview}</p>
        </article>
    )
}
export default Article