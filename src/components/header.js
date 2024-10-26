import * as React from "react"
import { Link } from "gatsby";
import { Color } from "../constants/constants";

function Header() {
    return ( 
    <header
    style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: Color.mainLight
    }}
    >
        <Link
            to="/"
            style={{
                fontSize: `larger`,
                textDecoration: `none`,
            }}
            >
            Data Seeding Page
        </Link>
    </header>
    );
}

export default Header;