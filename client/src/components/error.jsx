import Layout from './layout';
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    return (
        <Layout>
            <span className='text-2xl font-bold'>Error</span>
            <p>Oops! Something went wrong.</p>
            <p>{error.statusText}</p>
        </Layout>
    );
}