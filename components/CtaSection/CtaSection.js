import Button from "@components/Button"

export default function CTASection(props) {
    return (
        <section className={`bg-[#E3C5AF] py-8 text-center`}>
            <div className="container">
                <div>
                    <div>
                        <h2 className='mb-8'>{props.heading}</h2>
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