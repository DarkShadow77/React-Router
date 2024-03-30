import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './assets/page/About'
import Home from './assets/page/Home'
import Service from './assets/page/Service'
import Login from './assets/page/Login'
import NavBar from './components/navbar'
import Logout from './assets/page/Logout'
import Form from './assets/page/Form'

function App() {
	const [userDetails, setUserDetails] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	})
	const [validation, setValidation] = useState({
		firstname: false,
		lastname: false,
		email: false,
		password: false,
		picture: false,
	})

	const [logged, setLogged] = useState(false)

	const [picture, setFile] = useState();

    function handlePicture(e) {
        console.log(e.target.files);
		console.log(URL.createObjectURL(e.target.files[0]));
        setFile(URL.createObjectURL(e.target.files[0]));
    }

	function onFormChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setUserDetails({
			...userDetails,
			[name]: value,
		})

	}

	function handleSubmit(e) {
		console.log("message")
		console.log(picture)
		e.preventDefault()

		let firstnameVal = userDetails.firstname.length > 2 ? false : true;
		let lastnameVal = userDetails.lastname.length > 2 ? false : true;
		let emailVal = userDetails.email.includes("@") && userDetails.email.includes(".") ? false : true;
		let passwordVal = userDetails.password.length > 4 ? false : true;
		let pictureVal = picture == undefined ? true : false;

		setValidation({
			firstname: firstnameVal,
			lastname: lastnameVal,
			email: emailVal,
			password: passwordVal,
			picture: pictureVal,
		})

		if (firstnameVal == false && lastnameVal == false && emailVal == false && passwordVal == false && pictureVal == false) {
			setLogged(true)
			console.log(userDetails.firstname, userDetails.lastname, userDetails.email, userDetails.password, picture,)
			alert(`Welcome ${userDetails.firstname} ${userDetails.lastname}`)
		}
	}

	function logout(){
		setLogged(false)
		setFile()
		setUserDetails({
			firstname: "",
			lastname: "",
			email: "",
			password: "",
		})
	}

	return (
		<>
			<BrowserRouter>
				<NavBar logged={logged} logout={logout} picture={picture}/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Service />} />
					<Route path="/form" element={<Form firstname={userDetails.firstname} lastname={userDetails.lastname} email={userDetails.email} password={userDetails.password} picture={picture} fVal={validation.firstname} lVal={validation.lastname} eVal={validation.email} pVal={validation.password} gVal={validation.picture} onChange={onFormChange} pictureChange={handlePicture} onSubmit={handleSubmit} />} />
					<Route path="/logout" element={<Logout/>} />

				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
