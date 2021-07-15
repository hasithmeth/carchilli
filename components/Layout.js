import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter();
	return (
		<div>
			<link
				rel={ "preload" }
				href={ "/fonts/showcard.gothic.regular.ttf" }
				as="font"
				crossOrigin=""
			/>
			<Head>
				<title>{ title }</title>
				<meta name={ "Description" } content={ description }/>
				<meta name={ "keywords" } content={ keywords }/>
			</Head>
			<Header/>
			<div>{ children }</div>
			<Footer/>
		</div>
	);
}

Layout.defaultProps = {
	title: "Car Chilli | Online Car Sharing Made Easy",
	description: "Best online car sharing platform",
	keywords: "cars, sharing, singapore, travel",
};