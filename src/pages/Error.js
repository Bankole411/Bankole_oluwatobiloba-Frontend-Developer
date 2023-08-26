import {Link} from "react-router-dom"

export default function Error(){
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center h-screen">
                <h1>Error | The requested resource was not found</h1>
                <Link to="/" className="btn">Back to Homepage</Link>
            </section>
        </>
    )
}