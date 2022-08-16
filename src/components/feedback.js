import { useState } from 'react';
import React from 'react';

function Feedback() {
	const [form, setForm] = useState({
		name: '',
		score: 'good',
		agreement: false
	});

	const handleChange = ({ target }) => {
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		setForm(prevForm => ({ ...prevForm, [name]: value }));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		console.log(form.name, form.score, form.agreement);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Ваше имя</label>
				<input id="name" name="name" value={form.name} onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="score">Выберите уровень удовлетворенности</label>
				<select name="score" id="score" value={form.score} onChange={handleChange}>
					<option value="good">Хорошо</option>
					<option value="normal">Нормально</option>
					<option value="bad">Плохо</option>
				</select>
			</div>
			<div>
				<label htmlFor="agreement">
					Согласен на передачу персональных данных
					<input id="agreement" name="agreement" type="checkbox" checked={form.agreement} onChange={handleChange} />
				</label>
			</div>
			<button type='submit'>Отправить</button>
		</form>
	);
}

export default Feedback;
