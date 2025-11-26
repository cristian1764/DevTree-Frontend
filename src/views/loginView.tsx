import { Link } from "react-router-dom"

export default function LoginView() {
  return (
    <>
        <div>loginView</div>

        <nav>
            <Link to="/auth/register">
                no tines cuenta, quieres registrarete
            </Link>
        </nav>
    </>
       
    )
}
