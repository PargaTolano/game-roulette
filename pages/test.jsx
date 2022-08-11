import Head from 'next/head';

import EditableInput from '../components/form/EditableInput';
import LoadingIdle from '../components/loading/LoadingIdle';

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
        <LoadingIdle/>
    </>
  )
};

export default test;