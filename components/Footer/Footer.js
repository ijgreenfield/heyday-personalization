import Link from "next/link";

export default function Footer() {
    return (
        <section>
            <div className="py-4 px-[20px]">
                <div className="flex flex-col text-center space-y-4">
                    <div className='flex justify-between text-xs w-full'>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies' className="text-xs">Service Policy</Link>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies'>Privacy</Link>
                        <Link href='https://www.heydayskincare.com/pages/service-product-policies'>Accessibility</Link>
                    </div>
                    <div className='mb-4'>
                        <span>©2022 Heyday Wellness LLC.</span>
                    </div>
                </div>  
            </div>
        </section>
    )
}