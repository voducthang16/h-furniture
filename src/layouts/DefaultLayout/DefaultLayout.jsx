import Header from '~/layouts/components/Header';
function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <>{children}</>
        </>
    );
}

export default DefaultLayout;
