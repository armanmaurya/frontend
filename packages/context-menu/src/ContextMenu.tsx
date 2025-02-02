"use client";
import { useEffect } from "react";
import { useContextMenu } from "./useContextMenu";
import { motion } from "framer-motion";

export const ContextMenu = ({ children }: {
    children: React.ReactNode;
}) => {

    const closeWithEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            menu.setClicked(false);
        }
    }
    const menu = useContextMenu();
    useEffect(() => {
        if (menu.clicked) {
            const closeMenu = () => {
                menu.setClicked(false);
            };
            window.addEventListener("click", closeMenu);
            window.addEventListener("keydown", closeWithEsc);
            return () => {
                window.removeEventListener("click", closeMenu);
                window.removeEventListener("keydown", closeWithEsc);
            };
        }
    })
    return (
        <>
            {
                menu.clicked && (
                    <motion.div
                    initial={{ opacity: 0.5, translateY: -5 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0.5, translateY: -5 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    style={{ position: "absolute", top: menu.point.y, left: menu.point.x + 5 }}                    >

                        <div className="bg-neutral-600 rounded-md overflow-hidden min-w-48 shadow-md"
                            // style={{ position: "absolute", top: menu.point.y, left: menu.point.x }}
                        >
                            {children}
                        </div>
                    </motion.div>
                )
            }
        </>
    );
};
