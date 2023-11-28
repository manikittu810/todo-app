const person={
    name : 'Smk',
    address : {
        street : '1208 Deerpark Dr',
        city : 'Fullerton',
        state : 'California'
},
    uni : 'CSUF',
    profiles:['twitter','facebook','instagram'],

    PrintProfile : function (){
        person.profiles.map(
            profile => console.log(profile)
        )
    },

    PrintProf : function (){
        return this.profiles.map(p=> p);
    }
}

export default function LearningJs(){
return(
    <>
        <div>{person.name}</div>
        <div>{person.address.street},{person.address.city},{person.address.state}</div>
        <div>{person.uni}</div>
        <div>
            {person.profiles.map((profile,index) => (
                <div key={index}>{profile}</div>
            ))}
        </div>
        <div>{person.PrintProfile()}</div>
    </>

);
}