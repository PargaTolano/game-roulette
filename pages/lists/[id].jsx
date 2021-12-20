import React    from 'react';

import styles   from '../styles/Lists.module.scss';

const lists = ({data}) => {
    return (
        <div className={styles.page}>
            
        </div>
    )
};

export async function getServerSideProps(context){
    try {
        const { params } = context;

        const data = await getGame(params.id);

        return {
            props:{ data: data[0] }
        };

    } catch (error) {
        return {
            props:{ data: error.message }
        }
    }
};


export default lists;