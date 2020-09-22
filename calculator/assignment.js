const assignment= [{
    title: "Wakeup in the morning",
    isDone: true
},
{
    title: "Eat breakfast",
    isDone: false
},
{
    title: "Go to the gym",
    isDone: true
},
{
    title: "shop groceries",
    isDone: false
},
{
    title: "take a shower",
    isDone: false
}]

const thingsDone = assignment.filter(done=>done.isDone ===false )
thingsDone.forEach(todoo => console.log(todoo.title));
console.log(thingsDone)