import Image from "next/image";
import { useRouter } from 'next/router';
import React, { FC } from "react";
import styles from "@/styles/Home.module.css";
import { Character } from '@/interface';

interface Props {
  item: Character;
}

export const Card: FC<Props> = ({ item }) => {
  
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${item.tail}`);
  }

	return (
		<div className={styles.card} onClick={handleClick}>
			<Image
				src={item.image}
				alt={item.name}
				width={180}
				height={250}
				priority={true}
			/>
			<h2>{item.character}</h2>
			<span>{item.amiiboSeries}</span>
		</div>
	);
};
