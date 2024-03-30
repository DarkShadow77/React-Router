import style from '../css/form.module.css'

function Form(props) {

	let { firstname, lastname, email, password, fVal, lVal, eVal, pVal, gVal, onChange, pictureChange, onSubmit } = props

	return (
		<>
			<section>

				<div id={style.contactForm}>
					<form onSubmit={onSubmit}>

						<h1>Register Form</h1>
						<div id={style.nameWrapper}>
							<div className={style.formElement}>
								<label htmlFor="firstname" >Firstname</label>
								<input type="text" value={firstname} placeholder='Enter Firstname' name='firstname' onChange={(e) => onChange(e)} />
								{fVal && <p>Enter more than 2 char.</p>}
							</div>

							<div className={style.formElement}>
								<label htmlFor="lastname" >Lastname</label>
								<input type="text" value={lastname} placeholder='Enter Lastname' name='lastname' onChange={(e) => onChange(e)} />
								{lVal && <p>Enter more than 2 char.</p>}
							</div>
						</div>

						<div className={style.formElement}>
							<label htmlFor="email" >Email</label>
							<input type="email" value={email} placeholder='Enter Email' name='email' onChange={(e) => onChange(e)} />
							{eVal && <p>Enter a valid E-mail</p>}
						</div>

						<div className={style.formElement}>
							<label htmlFor="password">Password</label>
							<input type="password" value={password} placeholder='Enter Password' name='password' onChange={(e) => onChange(e)} />
							{pVal && <p>Password must be more than 4 char.</p>}
						</div>

						<div className={style.formElement}>
							<label htmlFor="gender">Profile Image</label>
							<input type="file" accept="image/*" name="picture" onChange={(e) => pictureChange(e)} />
							{gVal && <p>Select a Profile Pic.</p>}
						</div>

						<button>Submit</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default Form
