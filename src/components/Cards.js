import Card from "./Card";
import questions from "./questions";

export default function Cards({setRenderingFooter, renderingFooter}) {

    return (
        <>
            {questions.map((item, i) =>
                <Card
                    setRenderingFooter={setRenderingFooter}
                    renderingFooter={renderingFooter}
                    questions={item}
                    index={i}
                    key={i} />)
            }
        </>
    )
}