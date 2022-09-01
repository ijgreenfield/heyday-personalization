import Link from "next/link";

export default function Footer() {
    return (
        <section className='py-8'>
            <div className="container">
                <div className="flex flex-col text-center">
                    <div className='mb-4'>
                        <span>©2022 Heyday Wellness LLC.</span>
                    </div>
                    <div className='flex space-between'>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies'>Product & Service Policies</Link>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies'>Privacy Policy</Link>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies'>Accessibility Statement</Link>
                    </div>
                </div>  
            </div>
        </section>
    )
}