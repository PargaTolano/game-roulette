import { useEffect, useState }  from 'react';

const useNavbar = (threshold = 768)=>{
    const [isShown, setIsShown]         = useState(false);

    useEffect(()=>{
        const cb = ()=>{
            if( window.innerWidth > threshold ){
                setIsShown(false);
            }
        };

        window.addEventListener('resize',cb);
        return ()=>{
            window.removeEventListener('resize', cb);
        }
    },[]);

    return {
        isShown, 
        setIsShown, 
    };
};

export default useNavbar;