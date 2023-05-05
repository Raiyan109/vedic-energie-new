import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LetsGoButton from './LetsGoButton';
import { states } from '../constants';
import { districts } from '../constants';
import { cities } from '../constants';
import { AiOutlineSearch } from 'react-icons/ai'
import statesData from '../../public/states.json'
import UnitRangeSlider from './UnitRangeSlider';
import PeopleRangeSlider from './PeopleRangeSlider';
import styled from 'styled-components';
import { perCapitaEnergyConsumptionData } from '../constants';
import SpeedOMeter from './SpeedOMeter';

const Calculation = ({ ref }) => {
    const [peopleRangeValue, setPeopleRangeValue] = useState(5)
    const [unitRangeValue, setUnitRangeValue] = useState(100)
    const [statesId, setStatesId] = useState('')
    // const [district, setDistrict] = useState([])
    const [city, setCity] = useState([])
    const [avgConsumptionData, setAvgConsumptionData] = useState([])
    // const [districtId, setDistrictId] = useState('')
    const [cityId, setCityId] = useState('')
    const [conDataId, setConDataId] = useState('')

    const handlePeopleRange = (e) => {
        setPeopleRangeValue(e.target.value)
    }

    const handleUnitRange = (e) => {
        setUnitRangeValue(e.target.value)
    }

    const handleStates = (e) => {
        const getStateId = e.target.value
        // const getDistrictData = statesData.find(state => state.state_id === getStateId)?.districts
        const getCityData = statesData.find(state => state.state_id === getStateId)?.cities
        // setDistrict(getDistrictData)
        setCity(getCityData)
        setStatesId(getStateId)

        const getAvgEnergyData = statesData.find(state => state.state_id === getStateId)?.energyData
        setAvgConsumptionData(getAvgEnergyData)
        setStatesId(getStateId)

    }

    // const handleDistricts = (e) => {
    //     const districtId = e.target.value
    //     console.log(districtId);
    //     setDistrictId(districtId)
    // }

    const handleCities = (e) => {
        const cityId = e.target.value
        console.log(cityId);
        setCityId(cityId)
    }

    const handleAvgConsumptionData = (e) => {
        const conDataId = e.target.value
        console.log(conDataId);
        setConDataId(conDataId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Get State id' + statesId + ' And ' + districtId)
    }
    return (
        <Section ref={ref}>
            <section className="bg-orange">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className='text-center text-2xl font-bold text-lightBlue'>Energy Calculator</h2>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span>
                                <Link to='/article' className='text-lightBlue mr-2'>Residency</Link>
                                |
                                <Link to='/article' className='text-lightYellow ml-2'>Commercial</Link>
                            </span>
                            <h3 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5">Energy Usage Calculator For Your Home</h3>

                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-7 py-10'>


                                {/*  STATE */}
                                <div className="select">
                                    <select defaultValue="State" name="state" id="state" onChange={(e) => handleStates(e)}>
                                        <option selected disabled>State</option>
                                        {
                                            statesData.map((data, idx) => (
                                                <option value={data.state_id} key={idx}>{data.state_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                {/* Districts */}
                                {/* <div className="select mb-10">
                                        <select name="district" id="district" onChange={(e) => handleDistricts(e)}>
                                            <option selected disabled>District</option>

                                            {
                                                district?.map((item, idx) => (
                                                    <option value={item.district_id} key={idx}>{item.district_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div> */}

                                {/* Cities */}
                                <div className="select">
                                    <select defaultValue='City' name="city" id="city" onChange={(e) => handleCities(e)}>
                                        <option selected disabled>
                                            City
                                        </option>

                                        {
                                            city?.map((item, idx) => (
                                                <option value={item.city_id} key={idx}>{item.city_name}</option>
                                            ))
                                        }

                                    </select>
                                </div>


                                <div className='text-black'>
                                    {
                                        avgConsumptionData.map((item, idx) => (
                                            <p key={idx}>{item.data}</p>
                                        ))
                                    }
                                </div>


                                {/*  Billed unit per month */}

                                <div>
                                    <label
                                        for="BilledUnitsPerMonth"
                                        className="relative block overflow-hidden border-b-2 border-lightYellow pt-12"
                                    >
                                        <input
                                            style={{ background: 'transparent' }}
                                            type="dropdown"
                                            id="BilledUnitsPerMonth"
                                            placeholder="Billed Units per Month"
                                            className="peer h-8 w-full border-none p-0 placeholder-lightYellow focus:border-lightYellow focus:outline-none focus:ring-0 sm:text-md"
                                        />
                                    </label>
                                </div>
                            </div>
                            {/*  */}

                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-x-16 gap-7 py-10'>
                                <div className='flex justify-start items-center gap-x-12'>
                                    {/* Slider range people count */}
                                    <PeopleRangeSlider min='1' max={20} value={peopleRangeValue} handlePeopleRange={handlePeopleRange}
                                        text='No of People in Your Home'
                                    />

                                    <div className='pt-6'>
                                        <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{peopleRangeValue}</div>
                                    </div>
                                </div>

                                <div className='flex justify-start items-center gap-x-32'>
                                    {/* Slider range Units Consumed */}
                                    <UnitRangeSlider min='10' max='1000' value={unitRangeValue} handleUnitRange={handleUnitRange}
                                        text='Units Consumed'
                                    />

                                    <div className='pt-6'>
                                        <div className='w-20 h-9 bg-lightYellow flex justify-center items-center text-xl text-rgbaHeader'>{unitRangeValue}</div>
                                    </div>
                                </div>
                            </div>

                            <LetsGoButton />

                        </div>
                    </div>
                </div>
            </section>

            <SpeedOMeter avgConsumptionData={avgConsumptionData} />
        </Section>
    );
};

export default Calculation;

const Section = styled.div`
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: #FFB951;
    color:#FEFFCD;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 .select {
    width: 100%;
    height: 2em;
    background: transparent;
    border:none;
    border-bottom: 1px solid #FEFFCD;
 }
 
`