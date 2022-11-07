class Student{
    name;
    age;
    gender;
    nationality;

    constructor(stud_name:string, stud_age:number, stud_gender:string, stud_nat:string){
        this.name = stud_name;
        this.age = stud_age;
        this.gender = stud_gender;
        this.nationality= stud_nat;
    }
    
    getNationality(){
        return `Nationality: ${this.nationality}`;
    }
}

let student1:Student = new Student("Paula", 27, 'female', "Canadian"); 



class UnderGraduate extends Student implements IUndergrad{
    batch;
    GPA;

    constructor(stud_name, stud_age, stud_gender, stud_nat, stud_batch, stud_GPA){
        super(stud_name, stud_age, stud_gender, stud_nat);
        this.batch = stud_batch;
        this.GPA = stud_GPA
    }
    getNationality(){
        return `Nationality: ${this.nationality}`;
    }
    
}



interface IUndergrad{
    batch:number;
    GPA:number;
}

let undergraduate1:UnderGraduate = new UnderGraduate("Paula", 27, 'female', "Canadian", 1, 3.85);

console.log(undergraduate1.getNationality())