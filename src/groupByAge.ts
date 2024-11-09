type People = {
  name: string;
  age: number;
};

export function groupByAge(people: People[]): Record<number, People[]> {
  return people.reduce((accumulator, person) => {
    const cAge = person.age;

    if (!accumulator[cAge]) {
      accumulator[cAge] = [];
    }
    accumulator[cAge].push(person);

    console.log(accumulator);
    return accumulator;
  }, {} as Record<number, People[]>);
}
