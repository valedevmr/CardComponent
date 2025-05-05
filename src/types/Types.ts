export default interface BodyProps {
  name: string;
  department: string;
  hard_skill: string;
  profile_department?: string;
  resume: string;
  last_update: string;
}
export const InitialBodyCard:BodyProps ={
  name:"",
  department: "",
  hard_skill:"",
  profile_department: "",
  resume: "",
  last_update: "",
}
