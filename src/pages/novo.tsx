const Novo = () => {
    return (
        <>
            <h2>Novo cliente</h2>
            <form>
                <label htmlFor="label">Client's Name</label>
                <input type="text" />

                <br />
                
                <label htmlFor="label">Square Meter</label>
                <input type="number" />
            </form>
            <button>Start</button>
        </>
    )
}

export default Novo