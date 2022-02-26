import Head from 'next/head'
import {motion} from "framer-motion"
import db from "../lib/clientApp";
import {useCollection} from "react-firebase-hooks/firestore";


export default function Home() {
    const [heart] = useCollection(
        db.collection('ucraine'),
        {}
    );

    let currentHeartAmount = 0;

    function createHeart() {
        try {
            db.collection('ucraine')
                .doc('IMuEodzo23jgHF3lpxZJ')
                .update({
                    heart: currentHeartAmount + 1,
                })
                .then(
                )
        } catch (error) {
            console.log(error)
            alert(error)
        }
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
            </div>
            <div className={"justify-center text-center mt-24"}>
                <h1 className={"text-5xl font-bold"}>
                    Schenke der Ukraine
                </h1>
                <motion.div
                    animate={{
                        scale: 0.9
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 10,
                        damping: 20
                    }}
                    className={"text-center"}>
                    {heart && heart.docs.map((doc) => (
                        <div key={doc.id}>
                            {(doc.id === 'IMuEodzo23jgHF3lpxZJ' &&
                                <div className={"xl:pt-0 pt-4"}>
                                    <h1
                                        className={"xl:text-8xl md:text-8xl text-5xl transition cursor-pointer font-bold"}>
                                            <span className={"text-gray-700"}>mit einem <span
                                                onClick={createHeart}> ❤️ </span> Hilfe. Es wurden bereits</span>
                                    </h1>
                                    <h1 className={"mt-1 xl:text-9xl md:text-9xl text-6xl font-bold"}>
                                        <span>{currentHeartAmount = doc.data()['heart'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span> Herzen gesendet.
                                    </h1>
                                    <span className={"hidden"}>
                                        {currentHeartAmount = doc.data()['heart']}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className={"flex justify-center text-center mt-12 mb-5"}>
                <p className={"text-gray-800 text-sm"}>
                    Um ein Herz zu senden, musst du auf das Herz (Emoji) klicken.
                    <br/>
                    <a className={"transition text-gray-700 hover:text-gray-500"} title={"Impressum/Rechtliches"} target={"_blank"} rel="noreferrer" href={"https://marvhuelsmann.com"}>Marvin
                        Hülsmann</a> - {new Date().getFullYear()} ©, Ukraine digital helfen
                </p>
            </div>
        </div>
    )
}
