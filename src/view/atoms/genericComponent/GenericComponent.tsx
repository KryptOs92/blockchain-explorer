import React,{ useState, useEffect }  from "react";
import connect from "react-redux"
type GreetProps = { x1?: number };
const mapStateToProps = (state: any, ownProps: any) => ({
  // ... computed data from state and optionally ownProps
  
})

const mapDispatchToProps = {
  
}

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

export default connect(mapStateToProps, mapDispatchToProps)GenericComponent