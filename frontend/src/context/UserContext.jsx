import  { createContext, useState } from 'react'
import PropTypes from 'prop-types'; // Add this import statement


export const UserDataContext = createContext()


const UserContext = ({ children }) => {

    const [ user, setUser ] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })

    return (
        <div>
            <UserDataContext.Provider value={{ user, setUser }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}


UserContext.propTypes = {
    children: PropTypes.node.isRequired // This validates that 'children' is provided and is of type 'node'
};

export default UserContext