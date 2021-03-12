
import "./PrimaryNavigation.scss";

export default function PrimaryNavigation() {
    return (
        <nav className="primaryNavigation">
            <h2>SaaS Company</h2>

            <ul className="primaryNavigation__menu">
                <li className="primaryNavigation__menu__menuItem">
                    <a href="/home" className="primaryNavigation__menu__menuItem__menuLink">Home</a>
                </li>
                <li className="primaryNavigation__menu__menuItem">
                    <a href="/about" className="primaryNavigation__menu__menuItem__menuLink">About</a>
                </li>
                <li className="primaryNavigation__menu__menuItem">
                    <a href="/contact" className="primaryNavigation__menu__menuItem__menuLink">Contact</a>
                </li>
            </ul>
        </nav>
    )
}