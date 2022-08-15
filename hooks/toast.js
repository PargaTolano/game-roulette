import { 
    createContext, 
    useContext, 
    useState 
} from 'react';

const toastContext=createContext();

const useToast=()=>useContext(toastContext);
export default useToast;

export const ToastProvider=props=>{
    const [notifs, setNotifs]=useState([]);
    
    const removeNotification=
        idx => void setNotifs(x=>x.filter((v,i)=>i!==idx));

    const addNotification=
        notif => setNotifs(x=>[...x, notif]);

    const value={
        notifs,
        removeNotification,
        addNotification
    };

    return <toastContext.Provider value={value} {...props}/>
};

export const toastTypes={
    info:'infoToast',
    success: 'successToast',
    warning: 'warningToast',
    error: 'errorToast'
};
