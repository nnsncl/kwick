export const container = {
    hidden: {
        opacity: 0,
        height: '0vh'
    },
    visible: {
        opacity: 1,
        height: '95vh',
        transition: {
            type: "spring",
            stiffness: 74,
            damping: 16,
            mass: 1.9,
            ease: "anticipate"
        },
    }
};