"use client"
import React, { useState, useEffect, ChangeEvent } from "react";

interface City {
    Id: string;
    Name: string;
    Districts: District[];
}

interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

interface Ward {
    Id: string;
    Name: string;
}

const LocationSelector: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedWard, setSelectedWard] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
                const data: City[] = await response.json();
                setCities(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const renderCityOptions = () => {
        return cities.map((city) => (
            <option key={city.Id} value={city.Id}>
                {city.Name}
            </option>
        ));
    };

    const renderDistrictOptions = () => {
        if (selectedCity) {
            const selectedCityData = cities.find((city) => city.Id === selectedCity);
            return selectedCityData?.Districts.map((district) => (
                <option key={district.Id} value={district.Id}>
                    {district.Name}
                </option>
            ));
        }
        return null;
    };

    const renderWardOptions = () => {
        if (selectedDistrict) {
            const selectedCityData = cities.find((city) => city.Id === selectedCity);
            const selectedDistrictData = selectedCityData?.Districts.find((district) => district.Id === selectedDistrict);
            return selectedDistrictData?.Wards.map((ward) => (
                <option key={ward.Id} value={ward.Id}>
                    {ward.Name}
                </option>
            ));
        }
        return null;
    };

    const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCityValue = event.target.value;
        setSelectedCity(selectedCityValue);
        setSelectedDistrict("");
        setSelectedWard("");
    };

    const handleDistrictChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedDistrictValue = event.target.value;
        setSelectedDistrict(selectedDistrictValue);
        setSelectedWard("");
    };

    const handleWardChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedWardValue = event.target.value;
        setSelectedWard(selectedWardValue);
    };

    return (
        <>
            <div className="shipment-detail__item">
                <select
                    className="shipment-detail__item--select"
                    id="city"
                    aria-label=".form-select-sm"
                    value={selectedCity}
                    onChange={handleCityChange}
                >
                    <option value="" selected>
                        Chọn tỉnh thành
                    </option>
                    {renderCityOptions()}
                </select>
            </div>

            <div className="shipment-detail__item">
                <select
                    className="shipment-detail__item--select"
                    id="district"
                    aria-label=".form-select-sm"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                >
                    <option value="" selected>
                        Chọn quận huyện
                    </option>
                    {renderDistrictOptions()}
                </select>
            </div>
            <div className="shipment-detail__item">
                <select
                    className="shipment-detail__item--select"

                    id="ward"
                    aria-label=".form-select-sm"
                    value={selectedWard}
                    onChange={handleWardChange}
                >
                    <option value="" selected>
                        Chọn phường xã
                    </option>
                    {renderWardOptions()}
                </select>
            </div>
        </>
    );
};

export default LocationSelector;
