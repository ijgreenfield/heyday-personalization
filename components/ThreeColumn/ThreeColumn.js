import Image from "next/image";


export default function ThreeColumn(props) {
    const columns = [
        {
            name: 'Column 1',
            image: props.image1,
            copy: props.copy1
        },
        {
            name: 'Column 2',
            image: props.image2,
            copy: props.copy2
        },
        {
            name: 'Column 3',
            image: props.image3,
            copy: props.copy3
        }
    ]

    return (
        <section className={`bg-[#f9f4f0]`}>
            <div className='container'>
                <div className='text-center'>
                    <div>
                        <h2 className="mb-4">{props.heading}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div>
                        {columns.map (col => (
                            <div col={col} className="mt-8">
                                <div className="relative w-full h-40 my-4">
                                    <Image 
                                        src={col.image}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded"
                                        unoptimized
                                    />
                                </div>
                                <h3>{col.copy}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}