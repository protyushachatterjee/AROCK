import { motion } from 'framer-motion';
import React from "react";

const Menuleft = () => {
    return (
        <div className="w-2/3 px-40 py-10 relative h-full ">
            <motion.div
                whileHover={{ rotateY: -30, rotateX: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full flex items-center justify-center  relative"
            >
                <img
                    className="absolute opacity-10 scale-[0.97] w-full h-full object-cover object-center"
                    src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
                    alt=""
                />
                <img
                    className="absolute opacity-20 scale-[0.95] w-full h-full object-cover object-center"
                    src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
                    alt=""
                />
                <img
                    className="absolute opacity-30 scale-[0.91] w-full h-full object-cover object-center"
                    src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
                    alt=""
                />
                <img
                    className="absolute opacity-40 scale-[0.88] w-full h-full object-cover object-center"
                    src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
                    alt=""
                />
                <img
                    className="absolute opacity-50 w-full h-full object-cover object-center"
                    src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
                    alt=""
                />
            </motion.div>
        </div>
    );
};

export default Menuleft;
