import React from 'react'
import { header_content } from '../Header';
import { AnimatePresence, motion } from "framer-motion"

type Props = {
    mobileMenu: boolean;
}

type MobileMenuComponents = {
    title: string;
    active: boolean;
};

export default function MobileMenu({ mobileMenu }: Props) {
    return (
        <AnimatePresence>
            {
                mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1 }}
                        className='absolute top-full w-full bg-bgBlack md:hidden'
                    >
                        <div className='flex flex-col divide-y divide-customPurple text-center' >
                            {header_content &&
                                header_content.menu.map((item) => (
                                    <MobileMenuComponent key={item.title} title={item.title} active={item.active} />
                                ))}
                            <span className="flex justify-center items-center py-6 font-medium leading-9">
                                <motion.a
                                    initial={{ opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.4 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1 }}
                                    className='cursor-pointer'
                                >
                                    {header_content.link.title}
                                </motion.a>
                            </span>
                        </div>
                    </motion.div>
                )
            };
        </AnimatePresence>
    );
}

function MobileMenuComponent({ title, active }: MobileMenuComponents) {
    return (
        <a href='#' className={`${active ? "text-customPurple" : "text-gray-600"} py-6 transition hover:text-customPurple first-of-type:pt-0`} key={title}>
            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                className='cursor-pointer'>{title}
            </motion.span>
        </a>
    );
}