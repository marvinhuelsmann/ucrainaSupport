import Head from 'next/head'
import {motion} from "framer-motion"
import Heart from "../components/Heart";

export default function Home() {
    function warDays() {
        const today = new Date();
        const birthDate = new Date("February 24, 2022");
        return Math.floor(Math.abs(today.getTime() - birthDate.getTime())/(1000*3600*24) + 1);
    }
    return (
        <div>
            <Head>
                <title>Ukraine digital helfen</title>
                <link rel="icon" href="https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png"/>
                <link href="https://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet"/>
            </Head>
            <div className={"flex justify-center"}>
                <div
                    className="bg-gradient-to-t from-yellow-300 to-blue-500 w-full xl:h-64 md:h-80 h-96 md:h-64 md block shadow-lg shadow-yellow-300">
                    <div className={"xl:mt-12 md:mt-20 mt-24 xl:ml-12 md:ml-12 ml-6 cursor-pointer"}>
                        <motion.div
                            drag="x"
                            dragConstraints={{left: 0, right: 0}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.9}}
                        >
                            <h1 className="text-8xl md:text-9xl xl:text-9xl text-white font-bold">
                                Ukraine helfen.
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={"mt-16 ml-8"}>
                <div className={"mt-6"}>
                    <h1 className={"text-4xl font-bold"}>
                        Du willst immer auf dem laufenden bleiben?
                    </h1>
                    <p className={"text-3xl"}>
                        Schnelle und aktuelle Nachrichten erhältst du auf der <a
                        className={"text-blue-500 hover:text-blue-400 transition cursor-pointer"}
                        rel="noreferrer"
                        target={"_blank"}
                        href={"https://www.tagesschau.de/thema/ukraine/"}>Tagesschau Seite</a>!
                    </p>
                </div>
                <div className={"mt-6"}>
                    <h1 className={"text-4xl font-bold"}>
                        Du möchtest die Ukraine und diese Seite untersützen?
                    </h1>
                    <p className={"text-3xl pr-1"}>
                        Wenn du diese Website unterstützen willst, kannst du sie z.B. auf <a
                        className={"text-blue-500 hover:text-blue-400 transition cursor-pointer"}
                        rel="noreferrer"
                        target={"_blank"}
                        href={"http://www.twitter.com/share?url=Schau dir doch mal https://ukraines.live an und unterstütze die Ukraine! ❤️&hashtags=Ukraine,Regierung @marvhuelsmann"}>Twitter
                        tweeten</a>, <br/>um an die Ukraine zu spenden, benutze die <a
                        className={"text-blue-500 hover:text-blue-400 transition cursor-pointer"}
                        rel="noreferrer"
                        href={"https://twitter.com/Ukraine/status/1497594592438497282?s=20"}
                        target={"_blank"}>offiziellen Adressen</a>.
                    </p>
                </div>
            </div>
            <div className={"justify-center text-center mt-24"}>
                <h1 className={"text-5xl font-bold"}>
                    Schenke der Ukraine
                </h1>
                <Heart/>
            </div>
            <div className={"flex justify-center text-center mt-12 mb-5"}>
                <p className={"text-gray-800 text-sm"}>
                    <span className={"font-bold"}>
                        Laufender Krieg seit {warDays()} Tagen.
                    </span>
                    <br/>
                    Um ein Herz zu senden, musst du auf das Herz (Emoji) klicken.
                    <br/>
                    <a className={"transition text-gray-700 hover:text-gray-500"} title={"Impressum/Rechtliches"}
                       target={"_blank"} rel="noreferrer" href={"https://marvhuelsmann.com"}>Marvin
                        Hülsmann</a> - {new Date().getFullYear()} ©, Ukraine digital helfen
                </p>
            </div>
        </div>
    )
}
