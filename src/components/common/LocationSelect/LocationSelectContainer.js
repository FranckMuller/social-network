import React, { useState } from 'react';
import LocationSelect from './LocationSelect';

const locations = [
  {
    name: 'belarus',
    value: 'Беларусь',
    cities: ['Гомель', 'Гродно', 'Полоцк', 'Могилев', 'Минск'],
  },
  {
    name: 'russia',
    value: 'Россия',
    cities: [
      'Санкт-Питербург',
      'Москва',
      'Воронеж',
      'Казань',
      'Екатиренбург',
      'Сочи',
    ],
  },
];

const LocationSelectContainer = ({ input, ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState(locations[0]);

  const changeCountry = (value) => {
    const countryObj = locations.find((location) => location.value === value);
    const selectedCity = countryObj.cities[0];

    input.onChange({
      country: countryObj.value,
      city: selectedCity,
    });

    setSelectedCountry(countryObj);
  };

  const changeCity = (value) => {
    input.onChange({
      country: selectedCountry.value,
      city: value,
    });
  };

  const country =
    input.value && input.value.country
      ? input.value.country
      : locations[0].value;

  const cities = locations.find((c) => c.value === country).cities;

  const city =
    input.value && input.value.city
      ? input.value.city
      : locations.find((c) => c.value === country).cities[0];

  return (
    <LocationSelect
      mainItem={country}
      depentedItem={city}
      mainItems={locations}
      dependentItems={cities}
      onChangeMainItem={changeCountry}
      onChangeDependetItem={changeCity}
      {...props}
    />
  );
};

export default LocationSelectContainer;
