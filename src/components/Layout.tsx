import React, {FC} from "react";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import {Navbar} from "./Navbar";
import { Footer } from './Footer';

const inter = Inter({subsets: ["latin"]});

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
	return (
		<>
			<Navbar />
			<main className={`${styles.main} ${inter.className}`}>{children}</main>
			<Footer />
		</>
	);
};
