import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Menu, Typography } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import icon from '../images/cryptocurrency.png';

const items = [
    {
        label: <Link to="/">Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        key: 'cryptocurrencies',
        icon: <FundOutlined />,
    },
    {
        label: <Link to="/exchanges">Exchanges</Link>,
        key: 'exchanges',
        icon: <MoneyCollectOutlined />,
    },
    {
        label: <Link to="/news">News</Link>,
        key: 'news',
        icon: <BulbOutlined />,
    },
];

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={64} />
                <Typography.Title level={2} className="logo">
                    <Link to="/" >CryptoSphere</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark" items={items} />
        </div>
    )
}