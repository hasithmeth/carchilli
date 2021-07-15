import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";
import logo from "../public/assets/Logo-File-Old.png";

export default function Header() {
	const router = useRouter();
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
					<Link href={ "/guestWelcome" }>
						<a className={ router.route === "/guestWelcome" ?
							styles.selectedMenuText :
							styles.menuText }>Hi Guest!</a>
					</Link>
				</div>
			</div>
		</header>
	);
}