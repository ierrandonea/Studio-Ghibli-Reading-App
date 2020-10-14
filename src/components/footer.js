import React from 'react';

const Footer = () => {
    return (
        <footer class="text-secondary bg-dark px-2 py-3 mt-auto m">
            <div class="text-left text-sm">
                <h6>
                    This is a fan project for practicing purposes only, it consumes the
                    <a href="https://ghibliapi.herokuapp.com/" className="ml-2">Studio Ghibli API</a>.
                </h6>
                <h6>If you want to know more about Studio Ghibli, visit the
                <a href="http://www.ghibli.jp" className="ml-2">Studio Ghibli Offical Page</a>.
                </h6>
            </div>
        </footer>
    )
}

export default Footer;