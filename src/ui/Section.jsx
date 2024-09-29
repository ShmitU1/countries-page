import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import data_country from "../lib/data.json";
import Element from "../components/Element";
import SearchInput from "../components/SearchInput";
import RegionFilter from "../components/RegionFilter";
import CountryCard from "../components/CountryCard";

export function Section() {
  // Mode of the application (light/dark)
  const mode = useSelector((state) => state.toggleMode.mode);

  // Currently selected country data
  const selectedCountry = useSelector(
    (state) => state.selectedCountry.selectedCountryData
  );

  // Data of all countries
  const [data, setData] = useState(data_country);

  // ID of the currently selected country
  const [selectedCountryID, setSelectedCountryID] = useState("");

  // Search term for filtering countries
  const [searchTerm, setSearchTerm] = useState("");

  // Selected region for filtering countries
  const [selectedRegion, setSelectedRegion] = useState("");

  // State to manage the open/closed status of the region filter
  const [isOpen, setIsOpen] = useState(false);

  // Variants for animation when items are opened/closed
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  // Effect to scroll to the selected country when it changes
  useEffect(() => {
    const sectionContainer = document.querySelector(".section_container");
    if (sectionContainer) {
      document
        .getElementById(selectedCountryID)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCountry]);

  return (
    <main className={`main_section max-width-1440 ${mode}`}>
      <div className="main_select_container">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RegionFilter
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          itemVariants={itemVariants}
          mode={mode}
        />
      </div>
      {!selectedCountry && (
        <section className={`section_container`}>
          {data
            .filter(
              (country) =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedRegion ? country.region === selectedRegion : true)
            )
            .map((country, index) => (
              <CountryCard
                key={index}
                country={country}
                index={index}
                setSelectedCountryID={setSelectedCountryID}
              />
            ))}
        </section>
      )}
      {selectedCountry && <Element country={selectedCountry} />}
    </main>
  );
}
