import React, { useState, useEffect } from 'react';
import LocationSelect from './LocationSelect';
import { WrappedFieldProps } from 'redux-form';

export type Location = {
  name: string;
  value: string;
  cities: Array<string>;
};

type OwnProps = {
  locations: Array<Location>;
  className: string;
};

type LocationSelectContainerProps = OwnProps & WrappedFieldProps;
const LocationSelectContainer: React.FC<LocationSelectContainerProps> = ({ locations, input, meta, ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState(locations[0].value);
  const [selectedCity, setSelectedCity] = useState(locations[0].cities[0]);

  useEffect(() => {
    input.onChange({
      country: selectedCountry,
      city: selectedCity,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedCity]);

  const changeCountry = (value: string) => {
    let selectedCity;
    const country = locations.find((location) => location.value === value);
    if (country) {
      selectedCity = country.cities[0];
      input.onChange({
        country: country,
        city: selectedCity,
      });
      setSelectedCountry(country.value);
      setSelectedCity(selectedCity);
    }
  };

  const changeCity = (city: string) => {
    setSelectedCountry(selectedCountry);
    setSelectedCity(city);
  };

  const mainItems = locations;
  const dependentItems = locations.filter((location) => location.value === selectedCountry)[0].cities;
  return (
    <LocationSelect
      mainItem={selectedCountry}
      depentedItem={selectedCity}
      mainItems={mainItems}
      dependentItems={dependentItems}
      onChangeMainItem={changeCountry}
      onChangeDependetItem={changeCity}
      {...props}
    />
  );
};

export default LocationSelectContainer;
