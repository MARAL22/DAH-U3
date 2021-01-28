import {Injectable} from '@angular/core';
import {Student} from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    private students: Student[] = new Array();

    constructor() {
        this.students.push({
            name: 'Martinez Almejo',
            controlnumber: '15401025',
            active: true
        });

        this.students.push({
            name: 'Jose Manuel Martinez Almejo',
            controlnumber: '16400927',
            active: false
        });

        this.students.push({
            name: 'Jose Martinez ',
            controlnumber: '15401024',
            active: true
        });
    }

    getStudents(): Student[] {
        return this.students;
    }

    changeStatus(position: number): void {
        this.students[position].active = !this.students[position].active;
    }

    deleteStudent(position: number): void {
        this.students.splice(position, 1);
    }

    newStudent(student: Student): void {
        this.students.push(student);
    }
} 
