import React, { FC, useState, useCallback, useMemo } from 'react';
import { SelectInput, Flex } from 'vcc-ui';
import 'keen-slider/keen-slider.min.css'
import { fetchCarDetails } from 'src/network/fetchCars';
import { CarDetails } from 'src/components/CarDetails';
import { Slider } from 'src/components/Slider';

export const MainPage: FC = () => {
  // TODO: ideally should be taken from state
  const cars = fetchCarDetails();
  const [bodyType, setBodyType] = useState('all');
  const [shownCars, setShownCars] = useState(cars);
  const filterCars = useCallback((type: string): void => {
    type === 'all' ? setShownCars(cars) :
    setShownCars(cars.filter(car => car.bodyType === type))
    setBodyType(type);
  }, [cars, shownCars, bodyType]);
  const bodyTypes = useMemo(() => Array.from(new Set(cars.map(car => car.bodyType))), [cars]);

  return (
    <Flex>
      <SelectInput
        value={bodyType}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => filterCars(e.target.value)}
        style={{alignSelf: 'flex-start', width: '120px', marginBottom: '20px'}}
      >
        <option value='all'>All</option>
        { bodyTypes.map((type)=>(
          <option value={type} key={type}>{type.slice(0,1).toUpperCase()}{type.slice(1)}</option>
        ))}
      </SelectInput>
        <Slider
          slides={shownCars.length}
        >
          {shownCars.map((car, index) =>
            <CarDetails
              id={car.id}
              bodyType={car.bodyType}
              modelType={car.modelType}
              imageUrl={car.imageUrl}
              modelName={car.modelName}
              classN={`keen-slider__slide number-slide${index}`}
            />
          )}
        </Slider>
  </Flex>
  )
}

