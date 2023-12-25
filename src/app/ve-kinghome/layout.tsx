import React from 'react';
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css';
function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.main}>
            <div className={styles.content_container}>
                {children}
            </div>
        </main>
    )
}

export default Layout;