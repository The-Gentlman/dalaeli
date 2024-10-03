import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
            <motion.div
                className="mr-2"
                animate={{ scale: [3, 1.5, 3], opacity: [1, 0.2, 1] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                }}
            >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-500"></div>
            </motion.div>
        </div>
    );
};

export default PageLoader;
