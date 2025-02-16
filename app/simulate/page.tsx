// app/simulate/page.tsx
// Issue fixed simulation request to ACTUS service  
// -- an actus sever must be running on localhost:8083
// import EventsTable from  '@/component/EventsTable'

export default function simulatePage(){
  return <h1 className='text-2xl font-bold'>ACTUS demo2 Simulate Page</h1>;
}

//export default async function simulate(){
//    console.log("*102 Message from actussim page");
//  const reqbody = JSON.stringify({
//      contracts:[ {
//        calendar : 'WEEKDAY',
//        businessDayConvention : 'SCF',
//        contractType :'PAM',
//        statusDate : '2015-01-01T00:00:00',
//        contractRole : 'RPA',
//        contractID : 'Contract-01',
//        cycleAnchorDateOfInterestPayment : '2016-01-02T00:00:00',
//        cycleOfInterestPayment : 'P1YL0',
//        nominalInterestRate : 0.02,
//        dayCountConvention : '30E360',
//        currency : 'USD',
//        contractDealDate : '2015-01-01T00:00:00', 
//        initialExchangeDate : '2015-01-02T00:00:00',
//        maturityDate : '2020-01-02T00:00:00',
//        notionalPrincipal :1000,
//        premiumDiscountAtIED : 0}
//         ],
//        riskFactors :[]
//      });
//    console.log("*103 reqbody= ",reqbody);
//    const data = await fetch('http://localhost:8083/eventsBatch',
//        { method: 'POST',
//          body: reqbody ,
//          headers: {
//            'Content-type': 'application/json; charset=UTF-8',
//          },
//        });
//        const post = await data.json();
//        const length = post.length; 
//        const contractId = post[0].contractId
//        console.log("*104 returned post= ",post);
//        const events = post[0].events;
//        console.log("*105 events=", events);
//    return (
//        <>
//        <h1 className='text-2xl font-bold'> ACTUS demo1 Simulation Page</h1>
//        <h2 className='test-2l font-bold'> Runs a contract simulation using localhost:8083 ACTUS service</h2>
//        <div>
//        <strong> Feb 12th Winterthur - Page issued a simulation request to http://localhost:8083/eventsBatch </strong>
//        <p> Simulation request data is: {reqbody} </p>
//        <p> Returned result data is an array with length = {length} </p>
//            <ul>
//                <li> ContractID = {contractId}</li>
//                <li> Status =     {post[0].status}</li>
//                <li> Message =    {post[0].message}</li>
//                <li> Events is an array with {events.length} items.</li>
//            </ul>
//        <p> Table of events returned from simulation Wed  </p>
//        {EventsTable(events)}
//        </div>
//        </>
//    );
// }