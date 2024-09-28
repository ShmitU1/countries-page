import { motion } from 'framer-motion';
const RegionFilter = ({ isOpen, setIsOpen, selectedRegion, setSelectedRegion, itemVariants, mode }) => (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="container_menu_element"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedRegion ? selectedRegion : 'Filter by region'}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg fill={mode === 'light_mode' ? 'black' : 'white'} width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none", position: "absolute", zIndex: 9999 }}
      >
        <motion.li onClick={() => { setSelectedRegion(''); setIsOpen(false); }} variants={itemVariants}>Clear Region Filter</motion.li>
        <motion.li onClick={() => { setSelectedRegion('Asia'); setIsOpen(false); }} variants={itemVariants}>Asia</motion.li>
        <motion.li onClick={() => { setSelectedRegion('Europe'); setIsOpen(false); }} variants={itemVariants}>Europe</motion.li>
        <motion.li onClick={() => { setSelectedRegion('Africa'); setIsOpen(false); }} variants={itemVariants}>Africa</motion.li>
        <motion.li onClick={() => { setSelectedRegion('Americas'); setIsOpen(false); }} variants={itemVariants}>Americas</motion.li>
        <motion.li onClick={() => { setSelectedRegion('Oceania'); setIsOpen(false); }} variants={itemVariants}>Oceania</motion.li>
      </motion.ul>
    </motion.nav>
  );
  
  export default RegionFilter;