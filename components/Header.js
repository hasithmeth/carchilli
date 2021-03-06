import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import logo from "../public/assets/Logo-File-Old.png";
import logoSmall from "../public/assets/logo-small-words.png";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";

export default function Header() {
	const router = useRouter();
	const isThisMobile = useMediaQuery({ maxWidth: 768 });
	const [dropVisible, setDropVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isThisMobile);
	}, [isThisMobile]);

	function handleMenuOpen() {
		setDropVisible(true);
	}

	function handleMenuClose() {
		setDropVisible(false);
	}

	const Chron = () => (
		dropVisible ?
			<FaChevronUp size={ 10 } style={ { marginLeft: 5 } }/> :
			<FaChevronDown size={ 10 } style={ { marginLeft: 5 } }/>
	);

	const MobileHeader = () => (
		<div className={ styles.mobileHeader }>
			<div className={ styles.mobileLogo }>
				<Image className={ styles.mobileLogoImg }
				       src={ logoSmall }/>
			</div>
			<div className={ styles.hamburger }>
				<FaBars size={ 25 } color={ "black" }/>
			</div>
		</div>
	);

	const RegularHeader = () => (
		<div className={ styles.header }>
			<div className={ styles.logo }>
				<Image src={ logo } alt={ "Carchilli Logo" }/>
			</div>
			<div className={ styles.menu }>
				<Link href={ "/" }>
					<a className={ router.route === "/" ?
						styles.selectedMenuTextFirstItem :
						styles.menuTextFirstItem }>Home</a>
				</Link>
				<Link href={ "/becomeGuest" }>
					<a className={ router.route === "/becomeGuest" ?
						styles.selectedMenuText :
						styles.menuText }>Become A Guest</a>
				</Link>
				<Link href={ "/becomeHost" }>
					<a className={ router.route === "/becomeHost" ?
						styles.selectedMenuText :
						styles.menuText }>Become A Host</a>
				</Link>
				<div onMouseEnter={ handleMenuOpen }
				     onMouseLeave={ handleMenuClose }
				>
					<div className={ router.route === "/guestWelcome" ?
						styles.selectedMenuText :
						styles.menuText }>
						Hi Guest! <Chron/>
					</div>
					<div
						className={ dropVisible ?
							styles.dropDown :
							styles.dropDownHidden }>
						<Link href={ "/wallet" }>
							<a className={ styles.dropItem }>Wallet</a>
						</Link>
						<Link href={ "/orderForm" }>
							<a className={ styles.dropItem }>Order Form</a>
						</Link>
						<Link href={ "/account" }>
							<a className={ styles.dropItem }>Account</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<header>
			<div className={ styles.loginBar }>
				<Link href={ "/register" }>
					<a className={ styles.loginText }>Register</a>
				</Link>
				<Link href={ "/login" }>
					<a className={ styles.loginText }>Login</a>
				</Link>
			</div>
			{ isMobile ? <MobileHeader/> : <RegularHeader/> }
		</header>
	);
}