import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditUsuarios() {
    const { id } = useParams();
    // const history = useHistory();

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [street, setStreet] = useState('');
	// let street = ''
	const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');

    useEffect(() => {
        axios.get(`https://basededatos-op8s.onrender.com/getUsuario/${id}`)
            .then((result) => {
                const userData = result.data;
                setFirst(result.data.first);
                setLast(result.data.last);
				// street = userData.street;
                // setStreet(userData.street);
				            setStreet(result.data.street);
				setCity(result.data.city);
                setEmail(result.data.email);
                setPicture(result.data.picture);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`https://basededatos-op8s.onrender.com/editUsuarios/${id}`, {
				picture,
				first,
				last,
				street,
				city,
				email,
			})
			.then((result) => {
				console.log(result);
				// Redirige a la página principal después del PUT exitoso
				window.history.back();
			})
			.catch((err) => {
				console.log(err);
				// Maneja el error de la solicitud aquí si es necesario
				// No redirijas aquí si deseas que el usuario vea el mensaje de error
			});
	};

	// }

    return (
        <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <button className="btn btn-success" onClick={() => window.history.back()}>
                    Volver
                </button>

                <form onSubmit={handleSubmit}>
                    <h2>Editar datos de Usuario</h2>
                    <div className="mb-2">
                        <label htmlFor="first">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control"
                            id="first"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="last">Apellido</label>
                        <input
                            type="text"
                            placeholder="Apellido"
                            className="form-control"
                            id="last"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="street">Dirección</label>
                        <input
                            type="text"
                            className="form-control w-75"
                            id="street"
                            placeholder="Dirección"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="city">Ciudad</label>
                        <input
                            type="text"
                            className="form-control w-75"
                            id="city"
                            placeholder="Ciudad"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Correo electrónico</label>
                        <div className="input-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="usuario e-mail"
                                aria-label="Username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="picture">Foto</label>
                        <input
                            type="text"
                            placeholder="Enlace foto usuario"
                            className="form-control"
                            id="picture"
                            value={picture}
                            onChange={(e) => setPicture(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Actualizar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditUsuarios;
