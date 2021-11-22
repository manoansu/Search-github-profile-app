import { type } from 'os';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';

type FormData ={
    username: string;
}

type Address = {
    localidade: string;
}

const GitHub = () =>{

    const [formData, setFormData] = useState<FormData>();

    const [address, setAddress] = useState<Address>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    }
    
    return(
        <div className="github-profile-container">
            <h1 className="text-primary">Find Github perfil</h1>
            <div className="container github-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input 
                            type="text" 
                            className="github-input"
                            placeholder="Type Github User"
                            onChange={handleChange} 
                        />
                        <button type="submit" className="btn btn-primary github-button">
                            Find
                        </button>
                    </div>
                </form>
                <ResultCard perfil="Perfil: " seguidores="Seguidores: " descriptions={address?.localidade} />
            </div>
        </div>
    );
};

export default GitHub;