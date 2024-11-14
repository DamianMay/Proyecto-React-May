import "./formCheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
    return (
        <form onSubmit={handleSubmitForm}>
            <div className="data-personal">
                <label>Nombre completo </label>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required/>

                <label>Telefono</label>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} required/>

                <label>Email </label>
                <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} required/>
            </div>
            <button type="submit"> Enviar mi orden</button>
        </form>
    )
}

export default FormCheckout