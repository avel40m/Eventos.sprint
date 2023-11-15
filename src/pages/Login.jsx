import { useState } from 'react'
import { Login as Start } from '../components/Login'
import { Register } from '../components/Register'
import { Layout } from '../layouts/Layout'
export const Login = () => {
    const [value, setValue] = useState(true)
    return (
        <Layout>
            {
                value ?
                <Start setValue={setValue} />
                :
                <Register setValue={setValue} />
            }
        </Layout>
    )
}
