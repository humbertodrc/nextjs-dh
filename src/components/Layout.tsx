import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from 'next/head';
import React, { FC } from "react";
import { Footer } from './Footer';
import { Navbar } from "./Navbar";

const inter = Inter({subsets: ["latin"]});

interface LayoutProps {
	children: React.ReactNode;
	title: string;
}

export const Layout: FC<LayoutProps> = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Ecommerce De Practica" />
				<meta
					name="keywords"
					content="venta de figuras de Marios, videjuegos, zelda"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={`${styles.main} ${inter.className}`}>{children}</main>
			<Footer />
		</>
	);
};
