import Image from "next/image";
import { useRouter } from 'next/router';
import React, { FC } from "react";

interface Props {
  item: {
    image: string;
    name: string;
    character: string;
    amiiboSeries: string;
  };
}

export const Card: FC<Props> = ({ item }) => {
  
  const router = useRouter();

  console.log(item);
  
  const handleClick = () => {
    router.push(`/product/${item.name}`);
  }

	return (
		<div onClick={handleClick}>
			<Image
				src={item.image}
				alt={item.name}
				width={180}
				height={250}
				priority={true}
			/>
			<h3>{item.character}</h3>
			<p>{item.amiiboSeries}</p>
		</div>
	);
};
