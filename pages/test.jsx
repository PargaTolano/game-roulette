import Head from 'next/head';

import { ToastProvider } from '../hooks/toast';

import EditableInput from '../components/form/EditableInput';
import LoadingIdle from '../components/loading/LoadingIdle';
import CreateList from '../components/modal/CreateList';
import PageLoading from '../components/loading/PageLoading';
import ToastContainer from '../components/notification/ToastContainer';

const print=(name)=>new Promise((res,rej)=>{
    console.log(`new value: ${name}`);
    res();
});

const test = () => {
  return (
    <>
        <Head>
            <title>Testing</title>
        </Head>

        {/* <EditableInput 
            name='necesario' 
            initialValue='parga.tolano'
            onConfirm={print}
        /> */}
        {/* <LoadingIdle/> */}
        {/* <PageLoading/> */}
        
        <CreateList/>
    </>
  )
};

export default test;