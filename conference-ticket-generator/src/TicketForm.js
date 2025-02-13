import React, { useState } from "react";
import { toast } from "react-toastify";

const TicketForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    
    if (!name.trim()) {
      errors.name = "Full Name is required.";
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      errors.email = "Enter a valid email address.";
    }

    if (!avatar.match(/\.(jpeg|jpg|gif|png|webp)$/)) {
      errors.avatar = "Enter a valid image URL.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, email, avatar });
      toast.success("✅ Ticket generated successfully!");
    } else {
      toast.error("❌ Please correct the errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      {errors.avatar && <p className="error">{errors.avatar}</p>}

      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default TicketForm;
