import Nav from './Nav';
import Footer from './Footer';
import LogoCloud from './LogoCloud';
import GCHero from './GCHero';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<GCHero />
			<LogoCloud />
			<Footer />
		</>
	);
}
