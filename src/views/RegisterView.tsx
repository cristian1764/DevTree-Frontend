import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
          <div>RegisterView</div>
        
        <nav>
            <Link to="/auth/login">
            Si ya tienes cuenta inicia sesion
            </Link>
        </nav>
    </>
  
  )
}
