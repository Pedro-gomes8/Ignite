export function RepositoryItem(props) {
    const { name, description, url } = props.repository ? props.repository : { name: 'Default Name', description: 'Default description', url: 'Could not get URL' };

    return (
        <li>
            <h3><strong>{name}</strong></h3>
            <p>{description}</p>
            <a href={url}>Go to repository</a>
        </li>
    )
}