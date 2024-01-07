import { useLocation, useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()

    const fromPage: string = location.state?.from?.pathname || '/'
    console.log('fromPage:', fromPage)

    return <div>LoginPage</div>
}

export default LoginPage
