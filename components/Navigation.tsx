import Link from "next/link";

const Navbar = ()=>{
    return(
        <>
        <header className="grid grid-cols-2 p-5">
            <div className="text-2xl">logo</div>
            <nav>
                <ul className="flex gap-5 text-2xl">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                     <li>
                        <Link href="/about">About</Link>
                    </li>
                     <li>
                        <Link href="/service">Service</Link>
                    </li>
                     <li>
                        <Link href="/contact">Contact</Link>
                    </li>   
                     <li>
                        <Link href="/clientcomp">Clientcomp</Link>
                    </li>
                     <li>
                        <Link href="/servercomp">Servercomp</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )

}
export default Navbar;
