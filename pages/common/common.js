import Header from "./header";
import Footer from "./footer";

export default function Common({ children }) {
    return (
        <>
            <Header />{children}<Footer />
        </>
    );
}