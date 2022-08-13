import dynamic from 'next/dynamic';

const NoSSRSecurity = dynamic(()=>import('../../components/dynamicpages/security'), {ssr:false});
export default NoSSRSecurity;
