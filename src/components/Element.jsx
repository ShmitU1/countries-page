import { useSelector, useDispatch } from 'react-redux';
import {removeSelectedCountry } from '../app/features/selectedCountry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Element = ({ country }) => {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.toggleMode.mode);
    const {name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders, flag} = country;
    
    const handleRemove = () => {
        dispatch(removeSelectedCountry(null));
    };

    return (
    <section className={`element_container ${mode}`}>
        <motion.button
            className="element_btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={handleRemove}
        ><FontAwesomeIcon icon={faArrowLeftLong} /> Back</motion.button>
        <div className='element_inner_container'>
            <img className='element_image' src={flag} alt="" />
            <div>
                <h2 className='element_name'>{name}</h2>
                <div className='element_info_container'>
                    <div className='element_info_section element_info_section1'>
                        {nativeName && <p className='info_section__element'><span>Native Name: </span>{nativeName}</p>}
                        {population && <p className='info_section__element'><span>Population: </span>{population}</p>}
                        {region && <p className='info_section__element'><span>Region: </span>{region}</p>}
                        {subregion && <p className='info_section__element'><span>Sub Region: </span>{subregion}</p>}
                        {capital && <p className='info_section__element'><span>Capital: </span>{capital}</p>}
                    </div>
                    <div className='element_info_section element_info_section2'>
                        {topLevelDomain && <p className='info_section__element'>
                            <span>Top Level Domain: </span>
                            {topLevelDomain.map(el => `${el} `)}
                        </p>}
                        {currencies && <p className='info_section__element'>
                            <span>Currencies: </span>
                            {currencies.map(el => `${el.name} `)}
                        </p>}
                        {languages && <p className='info_section__element'>
                            <span>Languages: </span>
                            {languages.map(el => `${el.name}, `)}
                        </p>}
                    </div>
                </div>
                {borders && <div className='element_border_section'>
                    <p className='border_section_name'>Border Countries: </p>
                    <div className='border_section_elements'>
                        {borders.map((border) => (
                            <motion.p 
                                key={border}
                                whileHover={{ scale: 1.1 }}
                            >
                                {border}
                            </motion.p>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
        
    </section>
    )
}

export default Element