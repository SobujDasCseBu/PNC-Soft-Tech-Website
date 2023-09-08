import { Colors } from "../../../constant/colors";
import img1 from "../../../assets/about/img/about-choose-1.jpg";
import img2 from "../../../assets/about/img/about-choose-2.jpg";
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Card = ({ type, text, subText }) => {
	const faPhoneStyle = {
		backgroundColor: "rgba(255, 94, 20,0.6)",
		borderColor: Colors.secondary,
	};
	return (
		<div className="relative mt-5  lg:w-[46%] w-[95%]">
			<div
				className="mt-3 top-1 -left-4  absolute mr-4 border-4 rounded-full  w-12 h-12 flex items-center justify-center"
				style={faPhoneStyle}
			>
				{type === "phone" ? (
					<FaPhone className="text-white"></FaPhone>
				) : (
					<AiTwotoneMail className="text-white"></AiTwotoneMail>
				)}
			</div>
			<div className="border-2 w-full ml-2 px-5 py-4 rounded-md shadow-sm">
				<h2 className="ml-2 font-semibold text-gray-400">{text}</h2>
				<h3 className="ml-2 text-sm mt-2">{subText}</h3>
			</div>
		</div>
	);
};

Card.propTypes = {
	type: PropTypes.oneOf(["phone", "mail"]).isRequired,
	text: PropTypes.string.isRequired,
	subText: PropTypes.string.isRequired,
};

const Left = () => {
	const spanHederElement = {
		color: Colors.secondary,
	};
	return (
		<div className="md:w-[45%] sm:[50%] w-[90%] mx-auto mt-10 md:mx-10 sm:mx-5">
			<div>
				<h3 className="font-semibold text-xl text-gray-300 mb-4">
					WHY CHOOSE US
				</h3>
				<h1 className="sm:text-2xl text-xl font-bold text-gray-500 mb-4">
					<span style={spanHederElement} className="">
						We Ensure The Quality{" "}
					</span>
					Of Your Dream Construction
				</h1>
				<p className="mb-4 text-gray-600 font-medium">
					Rorem Ipsum is simply dummy text of the printin and type setting
					industry. Lorem Ipsum has been the industry&apos;s standard dummy text
					ever since the 1500s, when an unknown
				</p>

				<p className="mb-4 text-gray-600 font-medium">
					Printer took a galley of type and scrambled it to make a type speci
					menu book. It has survived not only five centuries, but also the leap
					intoelectronic typesetting, remaining essentially unchanget was
					popularised.
				</p>
			</div>
			<div className="flex items-center">
				<img src={img1} className="w-12 h-12 rounded-full mr-4" alt="" />
				<div>
					<h2 className="text-xl">Md. Sina Khan</h2>
					<h3 className="text-base text-gray-500">Project Manager</h3>
				</div>
			</div>
		</div>
	);
};

const Right = () => {
	const element1 = {
		borderColor: Colors.secondary,
	};
	const element2 = {
		borderColor: Colors.primary,
	};
	return (
		<div className="md:w-[45%] sm:w-[50%] md:mt-0 mt-10 w-[95%] mx-auto  relative">
			<div
				style={element1}
				className={`border-4 sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] rounded-md  border-[${Colors.secondary}]`}
			>
				<img className="w-full h-full rounded-sm" src={img1} alt="" />
			</div>
			<div
				style={element2}
				className=" sm:w-[400px] w-[250px] sm:h-[400px] h-[300px] border-4 rounded-md absolute sm:left-28 sm:top-28 left-10 top-10"
			>
				<img alt="" className="w-full h-full rounded-sm " src={img2} />
			</div>
		</div>
	);
};

const ChooseSection = () => {
	const [isScreenLarge, setIsScreenLarge] = useState(true);

	const checkScreenSize = () => {
		const mdWidth = 768; // Width at which the screen is considered as 'md'
		setIsScreenLarge(window.innerWidth >= mdWidth);
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);
		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);
	return (
		<div className="flex md:flex-row-reverse flex-col py-20 my-28 justify-between md:px-16 sm:px-10 px-5">
			<Left />
			{isScreenLarge && <Right />}
		</div>
	);
};

export default ChooseSection;
