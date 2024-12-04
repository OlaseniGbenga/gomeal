import { Link } from "react-router-dom";
import {Button} from '@/components/ui/button'

function Error() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl">Oops! Page not found.</p>
        
        <Link to={'/'}> <Button className="mt-6">   Go back to Home</Button></Link>
      </div>
    </>
  );
}

export default Error;
