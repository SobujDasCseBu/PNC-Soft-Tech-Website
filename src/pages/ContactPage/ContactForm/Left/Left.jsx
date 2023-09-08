import { useState } from "react";
import { Colors } from "../../../../constant/colors";

const Left = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		phoneNumber: "",
		email: "",
		subject: "",
		message: "",
	});

	const { fullName, phoneNumber, email, subject, message } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Perform form submission logic
		console.log(formData);
		// Reset form fields
		setFormData({
			fullName: "",
			phoneNumber: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	const buttonStyle = {
		backgroundColor: Colors.secondary,
	};
	return (
		<div className="sm:w-[60%] w-full ">
			<h1 className="mx-5 text-2xl font-semibold text-left mb-5 ">
				Request a Quote
			</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col w-full sm:flex-row">
					<div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
						<label htmlFor="fullName" className="block mb-2">
							Full Name
						</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							value={fullName}
							onChange={handleChange}
							placeholder="Full Name"
							className="w-full px-4 bg-gray-200 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
						<label htmlFor="phoneNumber" className="block mb-2">
							Phone Number
						</label>
						<input
							type="tel"
							id="phoneNumber"
							name="phoneNumber"
							value={phoneNumber}
							placeholder="Phone Number"
							onChange={handleChange}
							className="w-full px-4 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
				</div>
				<div className="flex flex-col w-full sm:flex-row">
					<div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
						<label htmlFor="email" className="block mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email Address"
							value={email}
							onChange={handleChange}
							className="w-full px-4 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div className="w-full mx-0 mb-4 sm:mx-5 sm:w-1/2">
						<label htmlFor="subject" className="block mb-2">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={subject}
							placeholder="Subject"
							onChange={handleChange}
							className="w-full bg-gray-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
				</div>
				<div className="mb-4 sm:mx-5 mx-0">
					<label htmlFor="message" className="block mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={message}
						placeholder="Your Message"
						onChange={handleChange}
						className="w-full bg-gray-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					></textarea>
				</div>

				<div className="flex mx-5 justify-between">
					<div>
						<input
							type="checkbox"
							id="checkbox1"
							name="checkbox1"
							value="option1"
						/>
						<label htmlFor="checkbox1">Also subscribe us</label>
					</div>
					<div>
						<button
							type="submit"
							style={buttonStyle}
							className="px-10 sm:mx-5 mx-0 py-2 text-white bg-blue-500 rounded-3xl hover:bg-blue-600"
						>
							Send Data
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Left;
