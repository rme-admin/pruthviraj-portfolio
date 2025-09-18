import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Pruthviraj B | Resume & Portfolio",

    description:
		"My name is Pruthviraj B, I'm a Master's Student. I'm currently studying at Manipal Institute of Technology, Manipal.",

    author: "Pruthviraj B",
    siteUrl: "https://pruthviraj.rme.org.in/",
    applicationName: "Pruthviraj B",

    keywords: [
		"pruthviraj",
		"pruthvirajb",
		"pruthviraj b",
		"research made easy",
		"pyxis",
		"pruthviraj gowda",
		"prithviraj",
		"pruthvi",
		"pruthvirajs"
	],

    openGraph: {
		type: "website",
		url: "https://pruthviraj.rme.org.in",
		title: "Pruthviraj B | Portofolio",
		site_name: "Pruthvira B | Portofolio",
		description: "My name is Pruthviraj B, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png", //this has to be replaces by rme logo
				alt: "Pruthviraj Portofolio",
			},
		],
		site_name: "Pruthviraj B | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
