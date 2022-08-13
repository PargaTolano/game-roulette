import Head from 'next/head';

import EditableInput from '../components/form/EditableInput';
import LoadingIdle from '../components/loading/LoadingIdle';
import CreateList from '../components/modal/CreateList';
import PageLoading from '../components/loading/PageLoading';

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
        {/* <CreateList/> */}
        <PageLoading/>
    </>
  )
};

export default test;