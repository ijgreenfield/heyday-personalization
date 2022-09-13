import Link from "next/link";

export default function Button({href, children}) {
    return (
        <Link href={href}>
            <a className='bg-[#105368] text-white py-3 px-4 rounded font-bold'>{children}</a>
        </Link>
    )
}