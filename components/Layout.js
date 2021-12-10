import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LogoCloud from './LogoCloud';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<LogoCloud />
			<Footer />
		</>
	);
}
