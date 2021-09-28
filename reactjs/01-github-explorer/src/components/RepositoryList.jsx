import React from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.sass'

const repositoryExample = {
    name: 'Hello',
    description: 'This is an example description of a repository yay',
    url: 'https:'
}
export default function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repositoryExample}></RepositoryItem>
                <RepositoryItem></RepositoryItem>
                <RepositoryItem></RepositoryItem>
                <RepositoryItem></RepositoryItem>

            </ul>
        </section>
    )
}
