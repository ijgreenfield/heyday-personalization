import Button from "@components/Button"

export default function CtaSection(props) {
    return (
        <section className={`bg-[${props.bgColor}] py-8 text-center`}>
            <div className="container">
                <div>
                    <div>
                        <h3 className='mb-6'>{props.heading}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <Button href={props.href}>{props.cta}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}