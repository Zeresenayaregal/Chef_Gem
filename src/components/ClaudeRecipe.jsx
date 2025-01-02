import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    return(
        <section>
            <h2>Chef Gem Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{props.outPut}</ReactMarkdown>
            </article>
        </section>
    )
}