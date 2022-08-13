import dynamic from 'next/dynamic';

const NoSSRProfile=dynamic(()=>import('../../components/dynamicpages/profile'), {ssr: false});
export default NoSSRProfile;
