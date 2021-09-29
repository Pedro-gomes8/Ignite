interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url?: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    const { name, description, html_url } = props.repository || { name: 'Default Name', description: 'Default description', html_url: 'Could not get URL' };

    return (
        <li>
            <h3><strong>{name}</strong></h3>
            <p>{description}</p>
            <a href={html_url}>Go to repository</a>
        </li>
    )
}