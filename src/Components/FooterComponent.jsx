import React from 'react';
function Footer() {
    return (
        <>
            <footer className="py-5" style={{backgroundColor: '#171717', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                <div className="container px-4 px-lg-5">
                    <p className="m-0 text-center text-white">Copyright © Nissan 2024</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;