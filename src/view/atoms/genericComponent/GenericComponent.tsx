import React,{ useState, useEffect }  from "react";

type GreetProps = { x1?: number };


const GenericComponent = ({ x1 = 21 }: GreetProps) => {

    const [x, setX] = React.useState(false);
    


    //fa questo useEffect viene chiamato dopo ogni render
    useEffect(() => {
    });


    //essendoci la quadra aperta/chiusa queivale al componentDidMount
    useEffect(() => {  
        //il return corrisponde al componentwillunmount si può mettere dentro qualsiasi useEffect 
        //non per forza in quello del didmount (ammesso che ci sia poi)
        return () => {
          
        }
      }, [])


    //fa questo useEffect dopo il render ma solo quando la variabile di stato x cambia
    useEffect(() => {
      }, [x]);

    //fa questo useEffect dopo il render ma solo quando la props x1 cambia
    useEffect(() => {
    }, [x1]);


    return (
        <div>
            body
        </div>
    );
}

export default GenericComponent