import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';

const TestComponent = () => {
    const [num, setNum] = useState(0);
    const [preNum, setPreNum] = useState(0);

    const plusNum = () => {
        setPreNum(num);
        setNum(num + 1);
    }

    const minusNum = () => {
        setPreNum(num);
        setNum(num - 1);
    }

    useEffect(() => {
        return () => {
            if (preNum > num){

            }
        };
    }, [num]);


    return (
        <div>
            <h1>{num}</h1><br/>

            <Button variant="contained" onClick={plusNum}>+1</Button>
            <Button variant="contained" onClick={minusNum}>-1</Button>
        </div>

    );
};

export default TestComponent;

