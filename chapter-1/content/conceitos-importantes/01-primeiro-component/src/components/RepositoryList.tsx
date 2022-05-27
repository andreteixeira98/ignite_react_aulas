
import { RepositoryListItem } from "./RepositoryListItem";
import {useState, useEffect} from 'react';
import '../styles/components/repositoryList.scss';

//https://api.github.com/users/andreteixeira98/repos

//https://api.github.com/orgs/rocketseat/repos

interface Repository{
    id:number;
    name:string;
    description:string;
    html_url:string;
}
export function RepositoryList(){

   const [repos, setRepos] = useState<Repository[]>([]);


   useEffect(()=>{
    fetch('https://api.github.com/users/andreteixeira98/repos')
    .then(response=>response.json())
    .then(data => setRepos(data))
   },[]);

    return(

        <section className="repository-list">
            <h1>Lista de repositorios</h1>

           <ul>
            
            {repos.map(repository => (
                <RepositoryListItem key={repository.id} repository={repository} />
            ))}
           </ul>
        </section>
    );
}