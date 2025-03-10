import Good from './../assets/good.png';
import { Link } from 'react-router';

const Thanks = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <center className='space-y-3'>
                <img src={Good} alt="Good" className='h-32 w-auto' />
                <h1>Thank You!</h1>
                <p>Thank you for your interest! Voting is the expressin of our commitment to ourselves, one another, this country and this world</p>
                <Link className='bg-black text-white py-2.5 px-6 rounded-full inline-block' to={'/'}>Home</Link>
            </center>
        </div>
    )
}

export default Thanks