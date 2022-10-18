import { Department } from "../Enum/Departments";

export interface StudentData {
    rollNo: string;
    name: string;
    department: Department;
    amountDue: number;
  }