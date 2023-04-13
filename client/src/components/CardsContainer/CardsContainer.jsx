import Card from "../Card/Card";

const countries = [
  {
    id: "BRB",
    name: "Barbados",
    flag: "https://flagcdn.com/bb.svg",
    continent: '{"North America"}',
    capital: "Bridgetown",
    subregion: "Caribbean",
    area: 430,
    population: 287371,
  },
  {
    id: "REU",
    name: "Réunion",
    flag: "https://flagcdn.com/re.svg",
    continent: "{Africa}",
    capital: "Saint-Denis",
    subregion: "Eastern Africa",
    area: 2511,
    population: 840974,
  },
  {
    id: "SUR",
    name: "Suriname",
    flag: "https://flagcdn.com/sr.svg",
    continent: '{"South America"}',
    capital: "Paramaribo",
    subregion: "South America",
    area: 163820,
    population: 586634,
  },
  {
    id: "NAM",
    name: "Namibia",
    flag: "https://flagcdn.com/na.svg",
    continent: "{Africa}",
    capital: "Windhoek",
    subregion: "Southern Africa",
    area: 825615,
    population: 2540916,
  },
  {
    id: "GIN",
    name: "Guinea",
    flag: "https://flagcdn.com/gn.svg",
    continent: "{Africa}",
    capital: "Conakry",
    subregion: "Western Africa",
    area: 245857,
    population: 13132792,
  },
  {
    id: "VUT",
    name: "Vanuatu",
    flag: "https://flagcdn.com/vu.svg",
    continent: "{Oceania}",
    capital: "Port Vila",
    subregion: "Melanesia",
    area: 12189,
    population: 307150,
  },
];

const CardsContainer = () => {
  return (
    <div>
      {countries.map((country) => {
        return (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
