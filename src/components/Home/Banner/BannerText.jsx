import React from 'react';

const BannerText = ({ title, subtitle, image }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-7xl font-semibold">{title}</h1>
                    <p className="mb-5">
                        {subtitle}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerText;