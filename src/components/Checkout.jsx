import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

function Checkout() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [errors, setErrors] = useState({}); // Objeto para almacenar los errores de validación

  const { cart, totalPrice, createOrder } = useContext(CartContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Actualiza el estado correspondiente según el campo que se modificó
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "emailConfirm":
        setEmailConfirm(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "El nombre es obligatorio";
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "El apellido es obligatorio";
    }

    if (phone.trim() === "") {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\d+$/.test(phone)) {
      // Validar que el teléfono solo contenga números
      newErrors.phone = "El teléfono solo debe contener números";
    }

    if (email.trim() === "") {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      // Validar el formato del email
      newErrors.email = "El email no es válido";
    }

    if (emailConfirm.trim() === "") {
      newErrors.emailConfirm = "Confirmar el email es obligatorio";
    } else if (email !== emailConfirm) {
      newErrors.emailConfirm = "Los emails no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Si la validación es exitosa, crea la orden
      const buyer = { name, lastName, phone, email };
      createOrder(buyer);
    }
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <p>Total de la compra: ${totalPrice()}</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} x {item.quantity}
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <div className="text-danger">{errors.name}</div>} {/* Mostrar mensaje de error si existe */}
        </div>
        {/* ... otros campos del formulario con validación similar ... */}
        <button type="submit" className="btn btn-primary">
          Realizar Compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;