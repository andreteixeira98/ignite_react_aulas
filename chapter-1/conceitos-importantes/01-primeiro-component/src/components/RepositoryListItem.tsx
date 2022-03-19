import '../styles/components/repositoryListItem.scss';

interface RepositoryListItemProps{
   repository:{
    name:string;
    description:string;
    html_url:string;
   }
}
export function RepositoryListItem(props:RepositoryListItemProps){




    return(
        <li>
            <h2>{props.repository.name}</h2>
            <p>{props.repository.description }</p>
            <a href={props.repository.html_url}>Acessar Repository</a>
        </li>
    );
}