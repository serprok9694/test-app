import offerBackground1 from "./images/offerBackground1.jpg";
import offerBackground2 from "./images/offerBackground2.jpg";
import offerBackground3 from "./images/offerBackground3.jpg";
import offerBackground4 from "./images/offerBackground4.jpg";

export const menuItems = [
	{ title: "Home", link: "/" },
	{ title: "Products", link: "/" },
];

export const offers = [
	{
		title: "Move the borders of reality!",
		description: "Go on a space adventure - It's possible with us",
		link: "/",
		backgroundImage: offerBackground1,
	},
	{
		title: "Space is not just stars and planets",
		description: "Go on a space adventure",
		link: "/",
		backgroundImage: offerBackground2,
	},
	{
		title: "For those who dream of stars",
		description: "Our offer: make your dream come true",
		link: "/",
		backgroundImage: offerBackground3,
	},
	{
		title: "Fulfill your fantastic dreams",
		description: "Space has never been so close",
		link: "/",
		backgroundImage: offerBackground4,
	},
];

export const SMALL_BREAKPOINT = 'small';
export const MEDIUM_BREAKPOINT = 'medium';
export const LARGE_BREAKPOINT = 'large';

export const checkScreenSize = (width) => {
  if (width <= 380) return SMALL_BREAKPOINT;
  if (width <= 768) return MEDIUM_BREAKPOINT;
  return LARGE_BREAKPOINT;
}