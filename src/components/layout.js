import * as React from "react"
import Header from "./header";

import "./layout.css"

const Layout = ({ children }) => {
  
    return (
        <>
        <Header />
        <div
            style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
            }}
        >
            <main>{children}</main>
            <footer
            style={{
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
            }}
            >
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    </>
    )

}

export default Layout;