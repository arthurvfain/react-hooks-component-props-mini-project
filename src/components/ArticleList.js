import Article from "./Article"
function ArticleList({ articles })
{
    console.log(articles)
    return (
        <main>
            {articles.map(artData=><Article key={artData.id} article={artData}/>)}
        </main>
    )
}
export default ArticleList