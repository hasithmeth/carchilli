import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
	return (
		<header className={ styles.header }>
			<div className={ styles.loginBar }>
				<Link href={ "/register" }>
					<a className={ styles.loginText }>Register</a>
				</Link>
				<Link href={ "/login" }>
					<a className={ styles.loginText }>Login</a>
				</Link>
			</div>
			<div>
				<div>Logo</div>
				<div>Home</div>
				<div>Become A Guest</div>
				<div>Become A Host</div>
				<div>Hi Guest! v</div>
			</div>
		</header>
	);
}