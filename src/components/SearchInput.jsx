import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <div className="container_input_element">
    <span className="input_icon">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>
    <motion.input
      type="text"
      placeholder="Search for country..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      name="text_input"
    />
  </div>
);

export default SearchInput;
