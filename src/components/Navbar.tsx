import Image from "next/image";
import Link from "next/link";
import React from "react";
import menuContentEn from "@/lang/en/navbar";
import menuContentES from "@/lang/es/navbar";
import menuContentPT from "@/lang/pt/navbar";
import {useRouter} from "next/router";

export const Navbar = () => {
	// Traducciones
	const router = useRouter();
	const {locale} = router;
	const content =
		locale === "en"
			? menuContentEn
			: locale === "es"
			? menuContentES
			: menuContentPT;

	const chacgeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const locale = e.target.value;
		router.push(router.pathname, router.asPath, {locale});
	};

	return (
		<nav>
			<div>
				<Link href="/">
					<Image
						src="/logo-mario.png"
						alt="logo"
						width={100}
						height={100}
						priority={true}
					/>
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/">{content.home}</Link>
				</li>
				<li>
					<Link href="/series">{content.series}</Link>
				</li>
				<li>
					<Link href="/contact">{content.contact}</Link>
				</li>
				<li>
					<Link href="/blog">{content.blog}</Link>
				</li>
				<li>
					<select onChange={chacgeLanguage} name="idioma" id="idioma">
						<option value="es">Español</option>
						<option value="en">English</option>
						<option value="pt">Português</option>
					</select>
				</li>
			</ul>
		</nav>
	);
};
