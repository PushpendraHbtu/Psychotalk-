import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function KundaliForm() {
    const { register, watch, control } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        // Redirect to basic kundali page after form submission
        navigate('/basic-kundali');
    };
    const [username, setUsername] = React.useState('');
    const handleSubmit=(e)=>
        { e.preventDefault();
            setUsername({username}); }

    return (
        <>
            <div className='mr-44 ml-44 mt-0 pt-0 pb-2   bg-white text-black' >
                <div className='w-full h-full flex justify-between items-start content-center gap-10 p-4 '>
                    <div className='w-3/5 h-[80vh] relative mr-auto inline-block ' >
                        <div className=' '>
                            <div className='font-semibold tracking-wide text-2xl w-14  h-10 mr-0 mt-4 mb-4'> Kundali</div>
                            <div className='  w-full h-[70vh] p-4 shadow-lg shadow-slate-400 ring-1 ring-slate-400  hover:shadow-xl hover:shadow-slate-400 rounded-xl hover:ring-2 hover:ring-slate-400'>
                                <form onSubmit={(onSubmit)} className='w-full relative h-full '>
                                    {/* Full Name */}
                                    <div className='flex-col justify-start w-full '>
                                        <label htmlFor="fullName">Full Name:</label><br/>
                                        <input className='ml-0 mt-3 p-2 w-full rounded-lg border-spacing-10 border-black border-b-2 ' {...register("fullName")} type="text" id="fullName" value={username} onChange={(e)=>setUsername(e.target.value)} />
                                    </div>

                                    {/* Gender */}
                                    <div className=' w-full mt-3'>
                                        <label htmlFor="gender">Gender:</label><br/>
                                        <select className='mt-3 p-2 w-full rounded-lg border-b-2 border-black hover:border-none' {...register("gender")}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    {/* Date of Birth */}
                                    <div className='mt-3 w-full '>
                                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                                        <input className='mt-3 p-2 w-full rounded-lg border-b-2 border-black hover:border-none' {...register("dateOfBirth")} type="date" id="dateOfBirth" />
                                    </div>

                                    {/* Place of Birth */}
                                    <div className='mt-3 w-full' >
                                        <label htmlFor="placeOfBirth">Place of Birth:</label>
                                        <div className=' w-full    flex justify-between'>
                                            <select className='mt-3 p-2 w-full border-b-2 border-black rounded-lg text-black' {...register("state")} id="state" >
                                                {/* Add state options here */}
                                            </select>
                                            <select  className='mt-3 p-2 w-full border-b-2 border-black rounded-lg text-black '{...register("city")} id="city" aria-placeholder='CITY'>
                                                {/* Add city options here */}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Generate Button */}
                                    <div className='w-full h-10 text-pretty mt-11 flex justify-center relative '>
                                    <button className='w-full bg-orange-500 rounded-full hover:ring-2 hover:ring-slate-600' type="submit" onClick={handleSubmit}>Generate Kundali</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='  w-2/5 h-72 '>
                        <div >
                        <div className='font-semibold tracking-tight text-wrap  text-2xl  mr-0 mt-4 mb-4 h-10'> Saved kundali </div>
                        <div className='  w-full h-[70vh] p-4 shadow-lg shadow-slate-400 ring-1 ring-slate-400  hover:shadow-xl hover:shadow-slate-400 rounded-xl hover:ring-2 hover:ring-slate-400'>


                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KundaliForm;
