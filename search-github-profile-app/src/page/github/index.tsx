import './styles.css';

const GitHub = () =>{
    
    return(
        <div className="github-profile-container">
            <h1 className="text-primary">Find Github perfil</h1>
            <div className="container github-container">
                <form action="">
                    <div className="form-container">
                        <input 
                            type="text" 
                            className="github-input"
                            placeholder="Type Github User"
                             
                        />
                        <button type="submit" className="btn btn-primary github-button">
                            Find
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GitHub;