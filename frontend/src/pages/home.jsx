import React, { useEffect, useState } from 'react'; import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [employees, setemployee] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/employee')
            .then((response) => {
                setemployee(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'>EMPLOYEE LIST</h1>
                <Link to='/employee/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />

                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-seperate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate600 rounded-md'>NO</th>
                            <th className='border border-slate600 rounded-md'>NAME</th><th className='border border-slate700 rounded-md max-md'>ADDRESS</th>
                            <th className='border border-slate600 rounded-md'>OPERATIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, index) => (
                                <tr key={employee._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {index + 1}

                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {employee.empname}

                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {employee.empaddress}

                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center '>
                                        <div className='flex justify-center gap-x-4'>

                                            <Link to={`/employee/details/${employee._id}`}>
                                                <BsInfoCircle className='text-2x1 text-green-800' />
                                            </Link>
                                            <Link to={`/employee/edit/${employee._id}`}>

                                                <AiOutlineEdit className='text-2x1 text-yellow-600' />

                                            </Link>
                                            <Link to={`/employee/delete/${employee._id}`}>
                                                <MdOutlineDelete className='text-2x1 text-red-600' />
                                            </Link>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Home