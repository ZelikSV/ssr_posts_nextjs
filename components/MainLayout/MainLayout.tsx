import Link from "next/link";
import Head from "next/dist/next-server/lib/head";
import React from "react";

const MainLayout = ({children, title = ''}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <a>Posts</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{
                `nav ul {
                    display: flex;
                    background: blue;
                }
                li {
                margin-left: 15px;
                list-style: none;
                padding: 10px 25px
                }
                a {
                 color: #fff;
                }
                `
            }
            
            </style>
        </>
    )
};

export default MainLayout;
