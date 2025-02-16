// app/contracts/page.tsx
// define and print an ACTUS contract
'use client';

interface Term { termName:string, termValue: any};  // sets required attrs for Term

function termString(term: Term) {
   return ( term.termName + ": " + term.termValue.toString() );
}

interface Contract { terms: Term[] };

function contractTable(contract : Contract){
    return( 
        <table>
        <thead>
        <tr>
            <th>Term name</th>
            <th>Term Value</th>
        </tr>
        </thead>
        <tbody>
        {contract.terms.map((term,index) => (
            <tr key={index}>
                <td>{term.termName}</td>
                <td>{term.termValue}</td>
            </tr>
        ))}
        </tbody>
        </table>
    );
};

function termJSON(term: Term) {
    return ( '\"' + term.termName +'\": \"' + term.termValue.toString() + '"' );
}

export default function contractsPage(){
    const term1: Term  = { 
        termName:  'contractID',
        termValue:  'contractPAM01',
    }
    const term2: Term  = {
        termName: 'nominalValue',
        termValue: 1000,
    };

    const contract1 : Contract = {terms:  [
        {termName: 'contractID', termValue: 'contract-01' },
        {termName: 'calendar', termValue: 'WEEKDAY' },
        {termName: 'contractType', termValue: 'PAM' },
        {termName: 'notionalPrincipal', termValue :1000 }
        ]};

    return (
        <>
            <h1 className='text-2xl font-bold'>ACTUS demo2 Contracts Page</h1>
            <h2 className='text-1xl font-bold'>Experiment with rendering terms and contracts</h2>
            <div>
            <hr/>
            <h3 className='text-1l italic'>Lists for terms term1 and term2</h3>
            <ul>
                <li>Term data</li>
                <li>term1 as object = {termString(term1)}</li>
                <li>term2 as object = {termString(term2)}</li>
                <li>   </li>
                <li>Term JSON</li>
                <li>term1 as JSON = {termJSON(term1)}</li>
                <li>term2 as JSON = {termJSON(term2)}</li>
            </ul>
            <hr/>
            <h3 className='text-2l italic'>Contract as table of term data </h3>
            <p>
              Table of terms for sample contract with contractID = contract-01
            </p>
            {contractTable(contract1)}
            </div>
        </>
    )
}