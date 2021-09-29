import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.sass'

interface Repository {
    name: string;
    description: string;
    html_url?: string;
}
export default function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Pedro-gomes8/repos').then((response) => response.json()).then((data) => setRepositories(data));
    }, [])
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map((repository, id) => {
                    return <RepositoryItem key={id} repository={repository} />
                })}

            </ul>
        </section>
    )
}
