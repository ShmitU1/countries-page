import { motion } from "framer-motion";
import { setSelectedCountry } from "../lib/features/selectedCountry";
import { useDispatch } from "react-redux";

const CountryCard = ({ country, index, setSelectedCountryID }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      id={index}
      className="section_element"
      onClick={() => {
        dispatch(setSelectedCountry(country));
        setSelectedCountryID(index);
      }}
      whileHover={{ scale: [null, 1.05, 1.03] }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <img className="element_image" src={country.flag} alt={country.name} />
      <div className="element_info_container">
        <h2 className="element_name">{country.name}</h2>
        <div className="element_info">
          {country.population ? (
            <p className="info_content">
              <span>Population: </span>
              {country.population}
            </p>
          ) : (
            ""
          )}
          {country.region ? (
            <p className="info_content">
              <span>Region: </span>
              {country.region}
            </p>
          ) : (
            ""
          )}
          {country.capital ? (
            <p className="info_content">
              <span>Capital: </span>
              {country.capital}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CountryCard;
