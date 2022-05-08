import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicons/assets/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/assets/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/assets/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="%PUBLIC_URL%/assets/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="%PUBLIC_URL%/assets/favicons/safari-pinned-tab.svg"
                      color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv='cache-control' content='no-cache'/>
                <meta http-equiv='expires' content='0'/>
                <meta http-equiv='pragma' content='no-cache'/>

                <title>Exothium</title>
                <script src='node_modules/@ion-phaser/core/dist/ionphaser/ionphaser.esm.js'></script>
            </Head>

            <body>
            <div style={{fontFamily: 'Montreal', position: 'absolute', left: '-1000px', visibility: 'hidden'}}>.</div>
            <div style={{fontFamily: 'Montreal_bold', position: 'absolute', left: '-1000px', visibility: 'hidden' }}>.</div>
            <div id="root"></div>
            </body>

            {/*<footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>*/}
        </div>
    )
}
