import { faChess, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
        <div className="flex items-center space-x-4">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon" />
            </Link>
            <Link href="/VariationsPage/new">
                <FontAwesomeIcon icon={faChess} className="icon" />
            </Link>
        </div>
        <div>
            <p className="text-default-text">placeholder</p>
        </div>
    </nav>
  )
}

export default Nav