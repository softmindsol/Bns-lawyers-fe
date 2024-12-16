/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
		  fontFamily: {
			nunito: ['"Nunito Sans"', 'sans-serif'], // Add Nunito Sans as a custom font family
		  },
		  colors:{
			bgGray:"#eff1f0",
			primary:"#103FD3",
			secondary:"#071957",
			textblack:"#2E2E2E",
			textgray:"#696969"
	
		  },
		  backgroundImage: {
			mygradient1: "linear-gradient(to right,#0057FF, #0A2540)",
			mygradient2: 'linear-gradient(to right, #103FD3, #67B8E3 )',
			mygradient3: "linear-gradient(to right, #7360AD, #00639F)",
			mygradient4: "linear-gradient(to right, #3296D2, #00639F)",
			mygradient5: "linear-gradient(to right, #9F80FF, #7360AD)",
		  },
		  boxShadow: {
			'bottom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
		  },
		},
	  },
  plugins: [],
}