import axios from 'axios';
import { type } from 'os';
import ProfileImage  from '../../assets/images/profile.png';
import { useState } from 'react';
import ResultCard from '../../components/ResultCard';
import './styles.css';

type FormData ={
    username: string;
}

type Address = {
    url: string;
    name: string;
    followers:string;
    location: string;
}

const GitHub = () =>{

    const [formData, setFormData] = useState<FormData>({
        username: ''
    });

    const [address, setAddress] = useState<Address>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const name = event.target.name;
        const valor = event.target.value;

        // Peega os dados de formulario e atualiza os dados.
        setFormData( {...formData, [name]: valor });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.username}`)
            .then((response) =>{
                setAddress(response.data);
                console.log(response.data);
            })
            .catch((error) =>{
                setAddress(undefined);
                console.log(error);
            });

    }
    
    return(
        <div className="github-profile-container">
            <h1 className="text-primary">Find Github perfil</h1>
            <div className="container github-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input 
                            type="text" 
                            name="username"
                            value={formData?.username}
                            className="github-input"
                            placeholder="Type Github User"
                            onChange={handleChange} 
                        />
                        <button type="submit" className="btn btn-primary github-button">
                            Find
                        </button>
                    </div>
                </form>
                <div className="github-profile">
                    
                    { address &&
                    <>
                    <img src={ProfileImage} alt="name" className="github-image" />
                    <div className="github-information">
                        <h4>Informations</h4>
                        <ResultCard title="Profile: " description={address?.url} />
                        <ResultCard title="Followers: " description={address?.followers} />
                        <ResultCard title="Location: " description={address?.location} />
                        <ResultCard title="Name: " description={address?.name} />
                    </div>
                    </>}
                </div>
            </div>
        </div>
    );
};

export default GitHub;