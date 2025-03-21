import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
// import SlotCounter from 'react-slot-counter';
import Counter from "./Counter";
import "./style.css";

const CountDown = () => {
    const axiosPublic = useAxiosPublic()
    const [male, setMale] = useState([])
    const [female, setFemale] = useState([])
    const { data: allBio = [], isLoading, refetch } = useQuery({
        queryKey: ['allBio', male, female],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-bios`)
            const male = data.filter(item => item.gender === 'Male')
            setMale(male)
            const female = data.filter(item => item.gender === 'Female')
            setFemale(female)
            refetch()
            return data
        }
    })
    const { data: married = [] } = useQuery({
        queryKey: ['married'],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-married`)
            return data
        }
    })
    if (isLoading) return "Loading..."
    return (
        <div>
            <div className="stats bg-base-100 stats-vertical lg:stats-horizontal flex-1 flex p-10 shadow-xl">
                <div className="stat">
                    <div className="photo-profile">{/* <img  /> */}</div>
                    <div className="numbers">
                        <Counter number={allBio.length} title="Total Biodata" />
                        <Counter number={male.length} title="Male" />
                        <Counter number={female.length} title="Female" />
                        <Counter number={married.length} title="Married" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CountDown;