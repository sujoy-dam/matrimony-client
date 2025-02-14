import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';

const CountDown = () => {
    const axiosPublic = useAxiosPublic()
    const [male, setMale]=useState([])
    const [female, setFemale]=useState([])
    const { data: allBio = [], isLoading, refetch } = useQuery({
        queryKey: ['allBio'],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-bios`)
            console.log(data)
            const male = data.filter(item=>item.gender==='Male')
            setMale(male)
            const female = data.filter(item=> item.gender==='Female')
            setFemale(female)
            refetch()
            return data
        }
    })
    const { data: married = [] } = useQuery({
        queryKey: ['married'],
        queryFn: async () => {
            const { data } = await axiosPublic(`/all-married`)
            console.log(data)
            return data
        }
    })
    if(isLoading) return "Loading..."
    return (
        <div>
            <div className="stats stats-vertical lg:stats-horizontal flex-1 flex p-10 shadow">
                <div className="stat">
                    <div className="stat-title text-4xl">Total Biodata</div>
                    {/* <div className="stat-value">{allBio.length}</div> */}
                    <div className="stat-value text-7xl">
                    <CountUp delay={2} duration={30} end={allBio.length} />
                    </div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat">
                    <div className="stat-title text-4xl">Female</div>
                    {/* <div className="stat-value">{female.length}</div> */}
                    <div className="stat-value text-7xl">
                    <CountUp delay={2} duration={30} end={female.length} />
                    </div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat">
                    <div className="stat-title text-4xl">Male</div>
                    {/* <div className="stat-value">{male.length}</div> */}
                    <div className="stat-value text-7xl">
                    <CountUp delay={2} duration={30} end={male.length} />
                    </div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
                <div className="stat">
                    <div className="stat-title text-4xl">Completed</div>
                    <div className="stat-value text-7xl">
                    <CountUp delay={2} duration={30} end={married.length} />
                    </div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
            </div>
        </div>
    );
};

export default CountDown;