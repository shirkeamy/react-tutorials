import React from "react";

interface HeaderProps {
    name: string,
    email: string,
    telephone: number
}

const Header: React.FC<HeaderProps> = ({name, telephone, email}) => {

    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p>
                This is header component...
            </p>
        </div>
    )
}
export default Header;