import React from 'react';

const Logo = () => {
    return (
        <div>
        {/*lorsqu'on importe depuis JSX, c'est comme si on est dans 'public', le css c'est 
        différent, voir _logo.scss => background, on part du fichier sass vers l'img
        il faut mettre les 'img' dans un dossier sous 'src', ex. 'assets'*/}
            <div className="logo">
                <img src="./img/logo192.png" alt="logo" />
                <h3>React Flags</h3>
            </div>
        </div>
    );
};

export default Logo;