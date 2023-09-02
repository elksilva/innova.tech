// "use client"
// // Este componente es para dar un efecto de transicion al cargar la página pero demora mucho

// import {motion} from "framer-motion";

// const PageTransition = ({children}) => {
//   return (
//     <motion.div
//         initial={{ y: 12, opacity: 0}}
//         animate={{ y: 0, opacity: 1}}
//         exit={{ y: 12, opacity: 0}}
//         transition={{
//             type: "spring",
//             stiffness: 260,
//             damping: 40,
//             duration: 0.1,
//         }}
//     >
//         {children}
//     </motion.div>
//   )
// }

// export default PageTransition