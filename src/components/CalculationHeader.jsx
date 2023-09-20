import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-without-border.png';
import './style.css'
import styles from './style.module.css'

const CalculationHeader = () => {
  return (
    <div>
        <div className={color ? 'bg-rgbaHeader transition-all fixed w-full h-[100px] z-10 p-10' : 'fixed w-full h-[90px] z-10 p-10'}>


            <nav style={{ marginTop: "-25px" }} className="px-2 sm:px-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link className="flex items-center" to='/'>
                    <img src={logo} alt='header-logo' style={{ width: "70px", height: "70px" }}></img>
                </Link>

                <button
                    onClickk={() => setMenu(!menu)}
                    className="items-center md:hidden text-white text-2xl"
                    >
                    {menu ? <FaTimes /> : <FaBars />}
                    <span className="sr-only">Open main menu</span>
                </button>


                <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block bg-rgbaHeader w-[900px] h-[600px] flex items-center justify-center transition-all" : "hidden"}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/"
                                    className={styles.navLink}
                                        style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                            color: isActive ? '#EBE667' : 'white',
                                        };
                                    }}
                                    >
                                    Home
                                </NavLink>
                            </li>
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/"
                                    className={styles.navLink}
                                        style={({ isActive, isPending }) =>{
                                            return {
                                                borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                                color: isActive ? '#EBE667' : 'white'
                                            }
                                        }}>
                                    About Us
                                </NavLink>
                            </li>   

                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/"
                                    className={styles.navLink}
                                        style={({ isActive, isPending }) =>{
                                            return {
                                                borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                                color: isActive ? '#EBE667' : 'white'
                                            }
                                        }}>
                                    Service
                                </NavLink>
                            </li>        
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/"
                                    className={styles.navLink}
                                        style={({ isActive, isPending }) =>{
                                            return {
                                                borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                                color: isActive ? '#EBE667' : 'white'
                                            }
                                    }}>
                                    Blog
                                </NavLink>
                            </li>
                            <li className='block lg:pr-4 lg:pl-3 lg:text-xl md:text-sm text-xl font-bold text-lightBlue'>
                                <NavLink
                                    to="/energyCalc"
                                    className={styles.navLink}
                                    style={({ isActive, isPending }) => {
                                        return {
                                            borderBottom: isActive ? 'solid 5px #EBE667' : 'none',
                                            color: isActive ? '#EBE667' : 'white',
                                        };
                                    }}
                                >
                                    Calculation
                                </NavLink>
                            </li>
                            <li><GetAQuote backgroundColor='#FFFFFF' color='#2F45B7' /></li>


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    </div>
  )
}

export default CalculationHeader