// Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)



import React from 'react'

const RulesHook = () => {
    // const [MyName ,setMyName] = useState('blah blah blah '); 


    const bioData = [

{
    id:0 , myName:"name0" , age:25
},
{
    id:1 , myName:"name1" , age:35
},
{
    id:2 , myName:"name2" , age:45
},
{
    id:2 , myName:"name2" , age:45
},
{
    id:2 , myName:"name2" , age:45
}


    ]

    return (
        <>
           
{
bioData.map((func) => 
<h1 className='headingdec'> Name : {func.myName} || Age : {func.age}</h1>
)
}

        </>
       
    )
}

export default RulesHook
