import React from "react";
import "../styles/shop.css";
import hoodie from "../assets/shop/hoodie.png";
import shirt from "../assets/shop/sweatshirt.png";
import mug from "../assets/shop/mug.png";
import notebook from "../assets/shop/notebook.png";
import stickers from "../assets/shop/stickers.png";
import phonecover from "../assets/shop/phone-cover.png";

const Shop = ({ userName }) => {
	const products = [
		{
			id: 1,
			title: "COSC T-Shirt",
			image: shirt,
			description: "Comfortable and stylish COSC T-Shirt.",
		},
		{
			id: 2,
			title: "COSC Hoodie",
			image: hoodie,
			description: "Warm and cozy COSC Hoodie.",
		},
		{
			id: 3,
			title: "COSC Mug",
			image: mug,
			description: "Perfect mug for your coding sessions.",
		},
		{
			id: 4,
			title: "COSC Notebook",
			image: notebook,
			description: "Great for jotting down your ideas and notes.",
		},
		{
			id: 5,
			title: "COSC Phone Cover",
			image: phonecover,
			description:
				"Sleek and durable phone cover to protect your device.",
		},
		{
			id: 6,
			title: "COSC Stickers",
			image: stickers,
			description: "Cool stickers to personalize your gear.",
		},
	];

	return (
		<div className="shop">
			<h1>Welcome, {userName || "User"}</h1>
			<h4>Shop the Latest COSC Collection</h4>
			<div className="cards">
				{products.map((product) => (
					<div key={product.id} className="card">
						<img
							src={product.image}
							alt={product.title}
							className="card-image"
						/>
						<h5 className="card-title">{product.title}</h5>
						<p className="card-description">
							{product.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
