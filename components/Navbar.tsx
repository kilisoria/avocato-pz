import Link from "next/link"

const NavBar = () => {
    return (
        <>
            <nav>
                <menu>
                    <Link href="/">Home</Link><br />
                    <Link href="/about">About</Link>
                </menu>
            </nav>
        </>
    )
}

export default NavBar;
