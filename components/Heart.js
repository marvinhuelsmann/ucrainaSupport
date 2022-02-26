import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {motion} from "framer-motion";
import {useCollection} from "react-firebase-hooks/firestore";
import db from "../lib/clientApp";

export default function Heart() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [heart] = useCollection(
        db.collection('ucraine'),
        {}
    );

    let currentHeartAmount = 0;

    function createHeart() {
        let currentLocalHeartAmount = localStorage.getItem('hearts') != null ? localStorage.getItem('hearts') : 0
        if (currentLocalHeartAmount < 1111111) {
            try {
                db.collection('ucraine')
                    .doc('IMuEodzo23jgHF3lpxZJ')
                    .update({
                        heart: currentHeartAmount + 1,
                    })
                    .then(response => {
                            localStorage.setItem('hearts', currentLocalHeartAmount + 1)
                        }
                    )
            } catch (error) {
                console.log(error)
            }
        } else openModal()
    }

    return (
        <>
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
                                    <span>{currentHeartAmount = doc.data()['heart'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span> Herzen
                                    gesendet.
                                </h1>
                                <span className={"hidden"}>
                                        {currentHeartAmount = doc.data()['heart']}
                                    </span>
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto transition transform bg-gradient-to-t from-yellow-400 to-blue-500"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Ich bitte dich.
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Du hast bereits viele Herzen gesendet, mach eine kleine Pause und lass deine <a
                                        className={"text-blue-500 hover:text-blue-400 transition cursor-pointer"}
                                        rel="noreferrer"
                                        target={"_blank"}
                                        href={"http://www.twitter.com/share?url=Schau dir doch mal https://ukraine.live an und untersütze die Ukraine! ❤️&hashtags=Ukraine,Regierung @marvhuelsmann"}>Freunde weiterteilen</a>...
                                          </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Verstanden, danke!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
