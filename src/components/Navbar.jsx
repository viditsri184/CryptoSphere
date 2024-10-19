import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Menu, Typography, Button } from 'antd';
import React , {useState, useEffect} from "react";
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
        label: <Link to="/news">News</Link>,
        key: 'news',
        icon: <BulbOutlined />,
    },
];

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false);
        }
        else{
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={64} />
                <Typography.Title level={2} className="logo">
                    <Link to="/" >CryptoSphere</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu && (<Menu theme="dark" items={items} />)}
        </div>
    )
}