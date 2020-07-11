import Link from "next/link";

const ErrorPage = () => {
    return (
        <div>
            <p>This is Error Page</p>
            <p>Please go back
                <Link href="/">
                    <a>Main Page</a>
                </Link>
            </p>
        </div>
    )
};

export default ErrorPage;
