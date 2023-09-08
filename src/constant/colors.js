/* eslint-disable no-unused-vars */
import img from "../assets/profile/pnc.jpg";
import React from "react";
import sabuj from "../assets/profile/img/sabuj.jpg";
import anis from "../assets/profile/img/anis.jpg";
import rahat from "../assets/profile/img/rahat.JPG";
import subal from "../assets/profile/img/subal.jpg";
import sujan from "../assets/profile/img/sujan.jpg";
import tarikul from "../assets/profile/img/tarikul.jpg";

export const Colors = {
	primary: "#041436",
	secondary: "#FF5E14",
	textColor: "#ffff",
	secondaryBgColor: '#f4f7fb',
	secondaryTextColor: '#041436',
	primaryTextColor: '#fff',
	primaryBgColor: '#071952',
	excitetedColor: '#ff5e14'
};

const questions = [
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture? ",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
	{
		title: "Which types of works does Induzin manufacture?",
		details:
			"There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of industry.",
	},
];

const questionType = [
	{
		title: "Generals",
	},
	{
		title: "Payments",
	},
	{
		title: "Industry",
	},
	{
		title: "Factory",
	},
	{
		title: "Construction",
	},
	{
		title: "Pricing",
	},
	{
		title: "Materials",
	},
];

const serviceDetails = [
	{
		image: img,
		title: "Mobile App Development:",
		details:
			"PNC Soft Tech specializes in developing mobile applications for iOS and Android platforms.",
	},
	{
		image: img,
		title: "Web Development",
		details:
			"PNC Soft Tech offers web development services using a variety of technologies, including HTML, CSS, Vanilla JS, jQuery, Bootstrap, Tailwind CSS, and Bulma.",
	},
	{
		image: img,
		title: "PHP Development(Back End)",
		details:
			"PNC Soft Tech utilizes PHP, a popular server-side scripting language, to build dynamic and interactive web applications.",
	},
	{
		image: img,
		title: "Database Integration",
		details:
			"PNC Soft Tech has experience in working with MySQL, a widely used relational database management system.",
	},
	{
		image: img,
		title: "MERN Stack Development",
		details:
			"PNC Soft Tech specializes in MERN stack development, which includes MongoDB (NoSQL database), Express.js (web application framework), React.js .",
	},
	{
		image: img,
		title: "Flutter Development",
		details:
			"PNC Soft Tech utilizes Flutter, a UI toolkit, to develop natively compiled applications for mobile, web, and desktop from a single codebase.",
	},
];

const teamDetails = [
	{
		src: rahat,
		name: "Md Rahat",
		designation: "Project Manager",
	},
	{
		src: sabuj,
		name: "Sabuj Das",
		designation: "Frontend Developer",
	},
	{
		src: sujan,
		name: "Sujan Mridha",
		designation: "Frontend Developer",
	},
	{
		src: tarikul,
		name: "Md Tarikul Islam",
		designation: "Frontend Developer",
	},
	{
		src: anis,
		name: "Md Anis Molla",
		designation: "Frontend Developer",
	},
	{
		src: subal,
		name: "Subal Karmakar",
		designation: "Flutter Developer",
	},
];

const qualites =[
	{
		title: 'Knowledge & Experience',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Customer Focused',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Build Guarantee',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Quality sub-trades',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Obligation Free',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
	{
		title: 'Obligation Free',
		details: 'Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry standard.'
	},
]

export { questions, serviceDetails, teamDetails, questionType , qualites };
