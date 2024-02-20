import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Match from '../components/match';

export default function Home() {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        fetch('/api/matches')
            .then(response => response.json())
            .then(data => setMatches(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Layout>
            <ul className='my-4 space-y-4'>
                {matches.map(match => (
                    <li key={match.id}>
                        <Match match={match} />
                    </li>
                ))}
            </ul>
        </Layout>
    );
}