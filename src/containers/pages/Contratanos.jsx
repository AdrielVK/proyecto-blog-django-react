import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect, useState } from "react";
import {Helmet} from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";


function Contratanos(){
    const [enabled, setEnabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        subject: '',
        message: '',
        budget:'',
        phone:'',
    });

    const {
        name, 
        email,
        subject,
        message,
        budget,
        phone
    } = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    function onSubmit(e) {
        e.preventDefault()
        if(enabled){
            setLoading(true);
            const config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('subject', subject)
            formData.append('message', message)
            formData.append('phone', phone)
            formData.append('budget', budget)

            async function fetchData() {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/`, formData, config)
                if(res.status === 200){
                    setLoading(false)
                    setFormData({
                        name:'',
                        email:'',
                        message: '',
                        budget:'',
                        phone:'',
                    });
                    alert('Enviado', 'success')
                }
            }

            fetchData()

        } else {
            alert('you must accept the terms of service and conditions')
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
              <title>Adriel Vallejos Kehmeier - Contratanos</title>
              <meta name='description' content='Project App Full-Stack developed by Adriel Vallejos Kehmeier'></meta>
              <link rel='canonical' href='www.//AdrielValejosApp.com'/>
              <meta name='robots' content='all'></meta>
              <meta name='keywords' content='portfolio, Adriel Vallejos Kehmeier, Fullstack-app, fullstack developer'></meta>
              <meta name='published' content='Adriel Vallejos Kehmeier'></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <div className="relative bg-white">
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div className="mx-auto max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            Contact me and let's talk
                        </h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                        arcu.
                        </p>
                        <dl className="mt-8 text-base text-gray-500">
                        <div>
                            <dt className="sr-only">Postal address</dt>
                            <dd>
                            <p>742 Evergreen Terrace</p>
                            <p>Springfield, OR 12345</p>
                            </dd>
                        </div>
                        <div className="mt-6">
                            <dt className="sr-only">Phone number</dt>
                            <dd className="flex">
                            <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">+1 (555) 123-4567</span>
                            </dd>
                        </div>
                        <div className="mt-3">
                            <dt className="sr-only">Email</dt>
                            <dd className="flex">
                            <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">support@example.com</span>
                            </dd>
                        </div>
                        </dl>
                        <p className="mt-6 text-base text-gray-500">
                        Looking for careers?{' '}
                        <a href="#" className="font-medium text-gray-700 underline">
                            View all job openings
                        </a>
                        .
                        </p>
                    </div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div className="mx-auto max-w-lg lg:max-w-none">
                        <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="full-name" className="sr-only">
                            Full name
                            </label>
                            <input
                            type="text"
                            name="name"
                            value={name}
                            required
                            onChange={e=>onChange(e)}
                            autoComplete="name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                            Email
                            </label>
                            <input
                            value={email}
                            required
                            onChange={e=>{onChange(e)}}
                            name="email"
                            type="email"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">
                            Phone
                            </label>
                            <input
                            type="text"
                            required
                            name="phone"
                            value={phone}
                            onChange={e=>{onChange(e)}}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Phone"
                            />
                        </div>
                            <div>
                            <label className="sr-only">
                            Subject
                            </label>
                            <input
                            type="text"
                            name="subject"
                            value={subject}
                            required
                            onChange={e=>onChange(e)}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                            placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                            Message
                            </label>
                            <textarea
                            value={message}
                            required
                            onChange={e=>{onChange(e)}}
                            name="message"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Message"
                            defaultValue={''}
                            />
                        </div>
                        <div>
                            <label htmlFor="budget" className="sr-only">
                                Budget 
                            </label>
                            <select
                                value={budget}
                                onChange={e=>{onChange(e)}}
                                name="budget"
                                className="rounded-md mt-2 block w-full pl-3 pr-10 py-4 text-base border-gray-300"
                            >
                                <option value="">Budget (optional)</option>
                                <option value="0-5">$0 - $5000</option>
                                <option value="5-10">$5000 - $10000</option>
                                <option value="10-15">$10000 - $15000</option>
                                <option value="+15">+$15000</option>
                            </select>
                        </div>
                        <div>
                            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                <div className="grid-cols-12 ml-4 mt-2 flex">
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={`${
                                            enabled ? 'bg-indigo-400' : 'bg-indigo-100'
                                        } col-span-2 relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                        <span className="sr-only">Enable notifications</span>
                                        <span
                                            className={`${
                                            enabled ? 'translate-x-6' : 'translate-x-1'
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                        />
                                    </Switch>
                                    <p className="ml-4 col-span-10 text-sm font-medium leading-6 text-gray-800">
                                        I accept the<span className="text-indigo-500 font-semibold">  <Link to='/terms'>Terms of service</Link></span> and <span className="text-indigo-500 font-semibold"><Link to='/privacy'>Privacy policy</Link></span>
                                    </p>
                                    </div>

                                    {
                                        loading ?
                                        <div
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                            <DotLoader loading={loading} size={30} color="#ffffff"/>
                                        </div>
                                        :
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                            Send
                                        </button>
                                    }
                                </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
            
        </Layout>
    )
};

export default Contratanos

